import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const BlogVideoPlayer = ({ src, caption, className = "" }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // Ses varsayılan olarak açık

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video ekranda görünür olduğunda oynat ve sesi aç
            videoElement.muted = false;
            setIsMuted(false);
            videoElement.play().then(() => {
              setIsPlaying(true);
            }).catch(() => {
              // Otomatik oynatma engellenirse sessiz oynatmayı dene
              videoElement.muted = true;
              setIsMuted(true);
              videoElement.play().catch(() => {});
            });
          } else {
            // Ekrandan çıkınca durdur
            videoElement.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 } // %50 görünür olduğunda tetikle
    );

    observer.observe(videoElement);

    return () => {
      if (videoElement) observer.unobserve(videoElement);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <figure className={`my-8 flex flex-col items-center ${className}`}>
      <div className="relative max-w-xs w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-black group cursor-pointer" onClick={togglePlay}>
        <video 
          ref={videoRef}
          src={src}
          loop
          playsInline
          className="w-full h-auto object-cover block"
        />

        {/* Ses Kontrol Butonu */}
        <button 
          onClick={toggleMute}
          className="absolute bottom-3 right-3 z-20 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition-colors"
          title={isMuted ? "Sesi Aç" : "Sesi Kapat"}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>

      {caption && (
        <figcaption className="text-center text-sm text-gray-500 mt-3 flex items-center justify-center">
          <span className="w-8 h-px bg-gray-300 mr-3"></span>
          {caption}
          <span className="w-8 h-px bg-gray-300 ml-3"></span>
        </figcaption>
      )}
    </figure>
  );
};

export default BlogVideoPlayer;
