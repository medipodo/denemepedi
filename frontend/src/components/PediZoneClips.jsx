import React, { useState } from 'react';
import LocalizedLink from './LocalizedLink';
import { Helmet } from 'react-helmet-async';
import { Volume2, VolumeX, Heart, Share2, ArrowLeft, ShieldCheck, Stethoscope } from 'lucide-react';

const clipsData = [
  {
    id: 1,
    title: "Corn Freze ile Nasır Temizliği",
    description: "Inatçı ve derinleşmiş nasırların corn freze cihazı ile sağlıklı deriye zarar vermeden güvenle ve acısız uzaklaştırılması.",
    videoSrc: "/blog-images/corn-callus/content/nasir-temizligi-corn-freze.webm",
    author: "Podolog Serdar Ceylan",
    tag: "Nasır Tedavisi",
    link: "/blog/nasir-neden-surekli-tekrar-eder",
    likes: 1420
  },
  {
    id: 2,
    title: "Ayak Mantarının Wood Işığı Altındaki Görüntüsü",
    description: "Ultraviyole A (Wood ışığı) altında mantar sporlarının fluoresan yansımaları ve lezyon sınırlarının klinik tespiti.",
    videoSrc: "/blog-images/parmak-arasi-mantar/ayak-mantari-wood-isigi.webm",
    author: "Podolog Serdar Ceylan",
    tag: "Ayak Mantarı",
    link: "/blog/parmak-arasi-mantar-nasil-gecer",
    likes: 985
  },
  {
    id: 3,
    title: "Onikogrifoz ve Tırnak Mantarı Ayrımı",
    description: "Koç boynuzu tırnak (onikogrifoz) ile tırnak mantarının klinik olarak birbirine karıştırılan ayırt edici özellikleri.",
    videoSrc: "/blog-images/tirnak-mantari-neden-gecmez/tirnak-mantari-onikogrifoz.webm",
    author: "Podolog Serdar Ceylan",
    tag: "Tırnak Sağlığı",
    link: "/blog/tirnak-mantari-neden-gecmez",
    likes: 1150
  },
  {
    id: 4,
    title: "Podolog Gözüyle Klinik Nasır Vakası",
    description: "Klinik ortamda profesyonel nasır değerlendirmesi, basınç noktaları ve bakım sonrası pürüzsüz görünüm.",
    videoSrc: "/blog-images/corn-callus/content/nasir-pedizone-video.webm",
    author: "Podolog Serdar Ceylan",
    tag: "Klinik Deneyimler",
    link: "/blog/ayni-yerde-surekli-nasir-cikmasi",
    likes: 1890
  }
];

const PediZoneClips = () => {
  const [muted, setMuted] = useState(true);
  const [likes, setLikes] = useState(
    clipsData.reduce((acc, clip) => ({ ...acc, [clip.id]: { count: clip.likes, liked: false } }), {})
  );

  const handleLike = (id) => {
    setLikes(prev => ({
      ...prev,
      [id]: {
        count: prev[id].liked ? prev[id].count - 1 : prev[id].count + 1,
        liked: !prev[id].liked
      }
    }));
  };

  const handleShare = (clip) => {
    const shareUrl = `${window.location.origin}/clips#clip-${clip.id}`;
    if (navigator.share) {
      navigator.share({
        title: clip.title,
        text: clip.description,
        url: shareUrl,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert(`"${clip.title}" videosunun bağlantısı panoya kopyalandı!`);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col items-center justify-center">
      <Helmet>
        <title>PediZone Clips - Klinik Podoloji Video Akışı</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Top Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent p-4 flex items-center justify-between">
        <LocalizedLink to="/" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-md transition-colors text-sm font-medium">
          <ArrowLeft size={18} /> Ana Sayfa
        </LocalizedLink>
        <div className="flex items-center gap-2">
          <Stethoscope className="text-red-500" size={24} />
          <h1 className="text-lg font-bold tracking-wide">PediZone Clips</h1>
        </div>
        <button 
          onClick={() => setMuted(!muted)}
          className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full backdrop-blur-md transition-colors cursor-pointer"
          title={muted ? "Sesi Aç" : "Sesi Kapat"}
        >
          {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>

      {/* Reels Feed Container - Centered */}
      <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar flex flex-col items-center pt-16">
        {clipsData.map((clip) => (
          <div 
            key={clip.id} 
            id={`clip-${clip.id}`}
            className="w-full h-[calc(100vh-4rem)] snap-start flex items-center justify-center relative p-4"
          >
            {/* Video Card Container - Perfectly Centered */}
            <div className="relative w-full max-w-sm h-[78vh] bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-end border border-white/10">
              <video 
                src={clip.videoSrc}
                autoPlay
                muted={muted}
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none"></div>

              {/* Right Action Bar (Instagram Reels style) */}
              <div className="absolute right-4 bottom-24 flex flex-col items-center gap-5 z-20">
                <button 
                  onClick={() => handleLike(clip.id)}
                  className="flex flex-col items-center gap-1 group cursor-pointer"
                >
                  <div className={`p-3 rounded-full backdrop-blur-md transition-transform active:scale-125 ${likes[clip.id].liked ? 'bg-red-600 text-white' : 'bg-black/40 text-white hover:bg-black/60'}`}>
                    <Heart size={24} className={likes[clip.id].liked ? 'fill-current' : ''} />
                  </div>
                  <span className="text-xs font-semibold drop-shadow">{likes[clip.id].count}</span>
                </button>

                <button 
                  onClick={() => handleShare(clip)}
                  className="flex flex-col items-center gap-1 group cursor-pointer"
                >
                  <div className="p-3 rounded-full bg-black/40 text-white hover:bg-black/60 backdrop-blur-md transition-transform active:scale-125">
                    <Share2 size={24} />
                  </div>
                  <span className="text-xs font-semibold drop-shadow">Paylaş</span>
                </button>
              </div>

              {/* Bottom Info Bar */}
              <div className="relative z-20 p-5 pr-16 flex flex-col gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="bg-red-600/90 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-sm">
                    {clip.tag}
                  </span>
                  <span className="text-[11px] text-zinc-300 font-medium flex items-center gap-1">
                    <ShieldCheck size={12} className="text-red-400" /> {clip.author}
                  </span>
                </div>

                <h2 className="text-base font-bold text-white leading-snug">
                  {clip.title}
                </h2>

                <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed">
                  {clip.description}
                </p>

                <LocalizedLink 
                  to={clip.link}
                  className="mt-1 inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-all shadow-md text-xs text-center active:scale-95"
                >
                  Yazıyı İncele →
                </LocalizedLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PediZoneClips;
