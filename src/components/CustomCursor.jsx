import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    setIsVisible(true);

    const handleMouseMove = (e) => {
      // 1:1 Direct Instant Tracking (Zero Lag)
      setMousePos({ x: e.clientX, y: e.clientY });

      const target = e.target.closest('button, a, input, textarea, [role="button"]');
      setIsHovered(!!target);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      
      {/* 1:1 Instant Hardware-Speed Mobile Tech Pointer Arrow */}
      <div
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
          willChange: 'transform'
        }}
        className="fixed top-0 left-0 z-[9999] transition-transform duration-[0ms] ease-linear"
      >
        {/* Sleek Mobile & Flutter Dev Tech Pointer SVG */}
        <div className={`relative transition-transform duration-150 ${isHovered ? 'scale-125' : 'scale-100'}`}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
          >
            {/* Tech Pointer Arrow Body */}
            <path
              d="M3 3L11 25L15.5 15.5L25 11L3 3Z"
              fill="url(#flutterPointerGrad)"
              stroke="#0f172a"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* Flutter Wing Accent Inset */}
            <path
              d="M8 8L13 13.5L11.5 17L8 8Z"
              fill="#38bdf8"
            />
            <defs>
              <linearGradient id="flutterPointerGrad" x1="3" y1="3" x2="25" y2="25" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0284c7" />
                <stop offset="1" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
          </svg>

          {/* Hover Glow Dot */}
          {isHovered && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          )}
        </div>

      </div>

    </div>
  );
}
