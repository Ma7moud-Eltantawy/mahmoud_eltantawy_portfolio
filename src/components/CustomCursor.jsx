import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { mahmoudPhoto } from '../assets/mahmoudBase64';

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverLabel, setHoverLabel] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Check element under cursor for special hover state
      const target = e.target.closest('button, a, input, textarea, [role="button"]');
      if (target) {
        setIsHovered(true);
        if (target.closest('#mobile')) {
          setHoverLabel('FLUTTER');
        } else if (target.closest('#apigateway')) {
          setHoverLabel('APISIX');
        } else if (target.closest('#architecture')) {
          setHoverLabel('CLEAN ARCH');
        } else {
          setHoverLabel('');
        }
      } else {
        setIsHovered(false);
        setHoverLabel('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
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
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      
      {/* SINGLE UNIFIED IDENTITY CURSOR */}
      <motion.div
        animate={{
          x: mousePos.x + 8,
          y: mousePos.y + 8,
          scale: isHovered ? 1.15 : 1
        }}
        transition={{
          type: 'spring',
          damping: 32,
          stiffness: 450,
          mass: 0.2
        }}
        className={`fixed flex items-center gap-2.5 px-3 py-1.5 rounded-full border transition-all duration-200 shadow-2xl backdrop-blur-md ${
          isHovered
            ? 'bg-slate-900 border-cyan-400 shadow-cyan-500/40 text-cyan-400'
            : 'bg-slate-950/90 border-blue-500/40 shadow-blue-500/20 text-white'
        }`}
      >
        {/* Mahmoud's Profile Photo */}
        <img
          src={mahmoudPhoto}
          alt="Mahmoud"
          className="w-5 h-5 rounded-full object-cover border border-cyan-400 shrink-0 shadow-sm"
        />

        {/* Mahmoud's Name */}
        <span className="font-mono text-[10px] font-black tracking-wider uppercase">
          MAHMOUD
        </span>

        {/* Optional Action Badge on Hover */}
        {isHovered && hoverLabel && (
          <span className="font-mono text-[8px] font-extrabold px-1.5 py-0.5 rounded bg-cyan-400 text-slate-950 uppercase tracking-tight ml-0.5">
            {hoverLabel}
          </span>
        )}
      </motion.div>

    </div>
  );
}
