import React, { useState, useEffect, useRef } from 'react';
import LocalizedLink from './LocalizedLink';
import { Helmet } from 'react-helmet-async';
import { Volume2, VolumeX, Heart, Share2, ArrowLeft, ShieldCheck, Stethoscope } from 'lucide-react';

const clipsData = [
  {
    id: 1,
    title: "PediZone Serum Damlalık Kullanımı ve Uygulama",
    videoSrc: "/blog-images/serum-kullanim/pedizone-serum-damlalik.webm",
    author: "Podolog Serdar Ceylan",
    tag: "Tırnak Bakımı",
    link: "/blog/serum-kullanim-onemi",
    likes: 1640
  },
  {
    id: 2,
    title: "Podolog Gözüyle Plantar Siğil ve Nasır Karşılaştırma",
    videoSrc: "/blog-images/sigil/sigil-plantar-sigil.webm",
    author: "Podolog Serdar Ceylan",
    tag: "Siğil & Nasır",
    link: "/blog/nasir-sigil-farklari",
    likes: 1530
  },
  {
    id: 3,
    title: "Tırnak Mantarı ve Onikogrifoz Klinik Gözlem",
    videoSrc: "/blog-images/nail-fungus/content/tirnak-mantari-onigogrifos1.webm",
    author: "Podolog Serdar Ceylan",
    tag: "Tırnak Mantarı",
    link: "/blog/tirnak-mantari-bulasici-mi",
    likes: 1480
  },
  {
    id: 4,
    title: "Corn Freze ile Nasır Temizliği",
    videoSrc: "/blog-images/corn-callus/content/nasir-temizligi-corn-freze.webm",
    author: "Podolog Pelin Yarbı",
    tag: "Nasır Tedavisi",
    link: "/blog/nasir-neden-surekli-tekrar-eder",
    likes: 1420
  },
  {
    id: 5,
    title: "Ayak Mantarının Wood Işığı Altındaki Görüntüsü",
    videoSrc: "/blog-images/parmak-arasi-mantar/ayak-mantari-wood-isigi.webm",
    author: "Podolog Serdar Ceylan",
    tag: "Ayak Mantarı",
    link: "/blog/parmak-arasi-mantar-nasil-gecer",
    likes: 985
  },
  {
    id: 6,
    title: "Onikogrifoz ve Tırnak Mantarı Ayrımı",
    videoSrc: "/blog-images/tirnak-mantari-neden-gecmez/tirnak-mantari-onikogrifoz.webm",
    author: "Podolog Serdar Ceylan",
    tag: "Tırnak Sağlığı",
    link: "/blog/tirnak-mantari-neden-gecmez",
    likes: 1150
  },
  {
    id: 7,
    title: "Podolog Gözüyle Klinik Nasır Vakası",
    videoSrc: "/blog-images/corn-callus/content/nasir-pedizone-video.webm",
    author: "Podolog Serdar Ceylan",
    tag: "Klinik Deneyimler",
    link: "/blog/ayni-yerde-surekli-nasir-cikmasi",
    likes: 1890
  }
];

const PediZoneClips = () => {
  const [globalMuted, setGlobalMuted] = useState(false);
  const [activeClipId, setActiveClipId] = useState(clipsData[0].id);
  const [likes, setLikes] = useState(
    clipsData.reduce((acc, clip) => ({ ...acc, [clip.id]: { count: clip.likes, liked: false } }), {})
  );

  const videoRefs = useRef({});

  // Tarayıcı ilk açılışta kullanıcı etkileşimi olmadan sesli videoyu engelleyebilir (Autoplay Policy).
  // Sayfada ilk tıklama veya dokunmada ses kilidini açıyoruz.
  useEffect(() => {
    const unlockAudio = () => {
      setGlobalMuted(false);
      if (videoRefs.current[activeClipId]) {
        videoRefs.current[activeClipId].muted = false;
        videoRefs.current[activeClipId].play().catch(() => {});
      }
      window.removeEventListener('click', unlockAudio);
      window.removeEventListener('touchstart', unlockAudio);
      window.removeEventListener('scroll', unlockAudio);
    };

    window.addEventListener('click', unlockAudio);
    window.addEventListener('touchstart', unlockAudio);
    window.addEventListener('scroll', unlockAudio);

    return () => {
      window.removeEventListener('click', unlockAudio);
      window.removeEventListener('touchstart', unlockAudio);
      window.removeEventListener('scroll', unlockAudio);
    };
  }, [activeClipId]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6 // Video ekranda %60 göründüğünde aktif kabul et
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = Number(entry.target.dataset.clipId);
          setActiveClipId(id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const elements = document.querySelectorAll('.clip-container');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // Aktif videoyu oynat, diğerlerini durdur ve ses durumlarını ayarla
    Object.keys(videoRefs.current).forEach((id) => {
      const video = videoRefs.current[id];
      if (video) {
        if (Number(id) === activeClipId) {
          video.muted = globalMuted;
          video.play().catch((err) => {
            // Eğer tarayıcı engellerse muted olarak oynatmayı dene
            if (err.name === 'NotAllowedError' && !globalMuted) {
              video.muted = true;
              video.play().catch(() => {});
            }
          });
        } else {
          video.pause();
          video.muted = true;
        }
      }
    });
  }, [activeClipId, globalMuted]);

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
        text: clip.title,
        url: shareUrl,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert(`"${clip.title}" videosunun bağlantısı panoya kopyalandı!`);
    }
  };

  const [fullscreenClip, setFullscreenClip] = useState(null);

  const handleVideoClick = (clip) => {
    setFullscreenClip(clip);
  };

  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col items-center justify-center">
      <Helmet>
        <title>PediZone Clips - Klinik Podoloji Video Akışı | PediZone</title>
        <meta name="description" content="PediZone Clips ile tırnak mantarı, nasır temizliği, batık tırnak ve klinik podoloji uygulamalarına ait Reels tarzı özel kısa klinik videolarını keşfedin." />
        <link rel="canonical" href="https://pedizone.com/clips" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:site_name" content="PediZone®" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PediZone Clips - Klinik Podoloji Video Akışı" />
        <meta property="og:description" content="PediZone Clips ile podolojik klinik vakalarını Reels formatında izleyin." />
        <meta property="og:url" content="https://pedizone.com/clips" />
        <meta property="og:image" content="https://pedizone.com/podolog-serdar-ceylan.webp" />

        {/* Video Object Schema for Google SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "PediZone Clips - Klinik Podoloji Video Akışı",
            "description": "Podolog Serdar Ceylan ve uzman ekibinin klinik ayak sağlığı uygulamaları, nasır temizliği ve tırnak bakım videoları.",
            "url": "https://pedizone.com/clips",
            "publisher": {
              "@type": "Organization",
              "name": "PediZone",
              "logo": {
                "@type": "ImageObject",
                "url": "https://pedizone.com/favicon.svg"
              }
            }
          })}
        </script>
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
          onClick={() => setGlobalMuted(!globalMuted)}
          className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full backdrop-blur-md transition-colors cursor-pointer"
          title={globalMuted ? "Sesi Aç" : "Sesi Kapat"}
        >
          {globalMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>

      {/* Reels Feed Container - Perfectly Centered */}
      <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar flex flex-col items-center">
        {clipsData.map((clip) => (
          <div 
            key={clip.id} 
            id={`clip-${clip.id}`}
            data-clip-id={clip.id}
            className="clip-container w-full h-screen snap-start flex items-center justify-center relative px-4 pt-12 pb-6"
          >
            {/* Video Card Container - Centered & Compact */}
            <div className="relative w-full max-w-sm h-[72vh] bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-end border border-white/10 my-auto">
              <video 
                ref={(el) => (videoRefs.current[clip.id] = el)}
                src={clip.videoSrc}
                muted={clip.id === activeClipId ? globalMuted : true}
                loop
                playsInline
                onClick={() => handleVideoClick(clip)}
                className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                title="Tam ekran yapmak için tıklayın"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"><div></div></div>

              {/* Right Action Bar (Instagram Reels style) */}
              <div className="absolute right-4 bottom-20 flex flex-col items-center gap-4 z-20">
                <button 
                  onClick={() => handleLike(clip.id)}
                  className="flex flex-col items-center gap-1 group cursor-pointer"
                >
                  <div className={`p-3 rounded-full backdrop-blur-md transition-transform active:scale-125 ${likes[clip.id].liked ? 'bg-red-600 text-white' : 'bg-black/40 text-white hover:bg-black/60'}`}>
                    <Heart size={22} className={likes[clip.id].liked ? 'fill-current' : ''} />
                  </div>
                  <span className="text-xs font-semibold drop-shadow">{likes[clip.id].count}</span>
                </button>

                <button 
                  onClick={() => handleShare(clip)}
                  className="flex flex-col items-center gap-1 group cursor-pointer"
                >
                  <div className="p-3 rounded-full bg-black/40 text-white hover:bg-black/60 backdrop-blur-md transition-transform active:scale-125">
                    <Share2 size={22} />
                  </div>
                  <span className="text-xs font-semibold drop-shadow">Paylaş</span>
                </button>
              </div>

              {/* Bottom Info Bar - Title Only */}
              <div className="relative z-20 p-4 pr-16 flex flex-col gap-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="bg-red-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-sm">
                    {clip.tag}
                  </span>
                  <span className="text-[11px] text-zinc-300 font-medium flex items-center gap-1">
                    <ShieldCheck size={12} className="text-red-400" /> {clip.author}
                  </span>
                </div>

                <h2 className="text-sm font-bold text-white leading-snug">
                  {clip.title}
                </h2>

                <LocalizedLink 
                  to={clip.link}
                  className="mt-1 inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-1.5 px-3 rounded-lg transition-all shadow-md text-xs text-center active:scale-95"
                >
                  Yazıyı İncele →
                </LocalizedLink>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Fullscreen Modal for PC / Mobile (object-contain, vertical, no zoom distortion) */}
      {fullscreenClip && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button 
            onClick={() => setFullscreenClip(null)}
            className="absolute top-6 right-6 z-50 bg-white/20 hover:bg-white/30 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold backdrop-blur-md transition-colors cursor-pointer"
          >
            ✕
          </button>
          
          <div className="relative w-full max-w-md h-[90vh] flex flex-col items-center justify-center">
            <video 
              src={fullscreenClip.videoSrc}
              autoPlay
              controls
              loop
              playsInline
              className="w-full h-full object-contain rounded-2xl bg-black shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PediZoneClips;
