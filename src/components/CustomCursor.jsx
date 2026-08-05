import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import mahmoudPhoto from '../assets/mahmoud.jpg';

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

      // Check element under cursor for special mobile interaction cues
      const target = e.target.closest('button, a, input, textarea, [role="button"]');
      if (target) {
        setIsHovered(true);
        if (target.closest('#mobile')) {
          setHoverLabel('FLUTTER // APP');
        } else if (target.closest('#apigateway')) {
          setHoverLabel('APISIX // ROUTE');
        } else if (target.closest('#architecture')) {
          setHoverLabel('CLEAN // ARCH');
        } else {
          setHoverLabel('TAP TO ACTION');
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
      
      {/* Outer Mobile Viewport Glowing Ring */}
      <motion.div
        animate={{
          x: mousePos.x - (isHovered ? 28 : 18),
          y: mousePos.y - (isHovered ? 28 : 18),
          scale: isHovered ? 1.4 : 1,
          rotate: isHovered ? 90 : 0
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 300,
          mass: 0.4
        }}
        className={`fixed rounded-[14px] border-2 transition-all duration-200 backdrop-blur-[2px] shadow-lg flex items-center justify-center ${
          isHovered
            ? 'w-14 h-14 border-cyan-400 bg-cyan-500/15 shadow-cyan-500/40'
            : 'w-9 h-9 border-blue-500/80 bg-blue-500/10 shadow-blue-500/20'
        }`}
      >
        {/* Subtle Smartphone Outline inside Ring */}
        <div className="w-3.5 h-6 rounded-[5px] border border-cyan-400/80 flex flex-col justify-between p-0.5 opacity-80">
          <div className="w-1.5 h-0.5 bg-cyan-400 rounded-full mx-auto" />
          <div className="w-1 h-1 rounded-full bg-cyan-400 mx-auto" />
        </div>
      </motion.div>

      {/* Pointer Badge with Mahmoud's Photo & Name ONLY */}
      <motion.div
        animate={{
          x: mousePos.x + 12,
          y: mousePos.y + 12,
          scale: isHovered ? 1.2 : 1
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 700
        }}
        className="fixed flex items-center gap-2 bg-slate-950/95 text-cyan-400 pl-1 pr-3.5 py-1 rounded-full border border-cyan-500/50 shadow-2xl backdrop-blur-md"
      >
        {/* Mahmoud's Profile Photo */}
        <img
          src={mahmoudPhoto}
          alt="Mahmoud"
          className="w-5 h-5 rounded-full object-cover border border-cyan-400 shrink-0"
        />

        <span className="font-mono text-[9px] font-black text-white tracking-wider uppercase">
          MAHMOUD
        </span>
      </motion.div>

      {/* Floating Action Badge on Hover */}
      {isHovered && hoverLabel && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ x: mousePos.x - 30, y: mousePos.y + 30 }}
          className="fixed px-2.5 py-1 rounded-full bg-cyan-500 text-slate-950 font-mono text-[9px] font-black shadow-lg uppercase tracking-wider"
        >
          {hoverLabel}
        </motion.div>
      )}

    </div>
  );
}
