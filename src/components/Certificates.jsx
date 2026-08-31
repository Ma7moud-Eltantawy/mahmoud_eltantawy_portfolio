import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE } from "../data/site";
import "./Certificates.css";

gsap.registerPlugin(ScrollTrigger);

export default function Certificates() {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      setTimeout(() => {
        if (!wrapperRef.current || !sectionRef.current) return;
        const scrollWidth = wrapperRef.current.scrollWidth - window.innerWidth;

        // 1. Horizontal scroll
        gsap.to(wrapperRef.current, {
          x: -scrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            end: () => `+=${scrollWidth}`,
            invalidateOnRefresh: true,
          }
        });

        // 2. Physics swing on rope
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          onUpdate: (self) => {
            const velocity = self.getVelocity();
            const swingAngle = gsap.utils.clamp(-15, 15, velocity / -100);

            gsap.to(cardsRef.current, {
              rotation: (index, target) => {
                const base = parseFloat(target.dataset.rotation);
                return base + swingAngle;
              },
              duration: 0.3,
              ease: "power1.out",
              overwrite: "auto"
            });

            gsap.to(cardsRef.current, {
              rotation: (index, target) => parseFloat(target.dataset.rotation),
              delay: 0.1,
              duration: 1.2,
              ease: "elastic.out(1, 0.4)",
              overwrite: "auto"
            });
          }
        });

        ScrollTrigger.refresh();
      }, 100);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="horizontal-certs-section" ref={sectionRef} id="certificate">
      
      <div className="pinned-header">
        <div className="eyebrow-text">Credentials & Courses</div>
        <h2 className="section-title">
          PROOF OF <br /><span>EVOLUTION.</span>
        </h2>
      </div>

      <div className="certs-scroll-wrapper" ref={wrapperRef}>
        
        <div className="infinite-rope"></div>

        {SITE.certificates.map((cert) => (
          <div 
            className="hanging-cert" 
            key={cert.id} 
            ref={addToRefs}
            data-rotation={cert.baseRot}
            style={{ 
              transform: `rotate(${cert.baseRot}deg)`,
              marginTop: `${cert.baseMargin}px`
            }}
          >
            
            <div className="clip"></div>
            
            <a 
              href={cert.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cert-card-link"
              data-cursor="link"
              title={`Verify credential: ${cert.title}`}
            >
              <div className="cert-card">
                <div className="cert-image">
                  <img src={`${import.meta.env.BASE_URL}${cert.image}`} alt={cert.title} loading="lazy" />
                </div>

                <div className="cert-info">
                  <h3>{cert.title}</h3>
                  <p>{cert.issuer}</p>
                  
                  <div className="cert-meta">
                    <span>{cert.tag}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            </a>

          </div>
        ))}

      </div>
    </section>
  );
}
