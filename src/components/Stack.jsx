import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./skill.css";

gsap.registerPlugin(ScrollTrigger);

const Stack = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null); 
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", 
          end: "+=300%",
          pin: true,
          scrub: 1.5, 
        },
      });

      // 1. Entrance of title and cards
      tl.to(textRef.current, { y: -150, opacity: 0, duration: 1 }, "intro")
        .fromTo(cardsRef.current, 
          { y: "100vh", opacity: 0 }, 
          { y: "0vh", opacity: 1, stagger: 0.1, duration: 1.5, ease: "power2.out" }, 
          "intro"
        ); 

      // 2. Spread
      tl.to(cardsRef.current[0], { xPercent: -105, rotation: -8, duration: 1.5 }, "spread")
        .to(cardsRef.current[2], { xPercent: 105, rotation: 8, duration: 1.5 }, "spread")
        .to(cardsRef.current[1], { y: "-5vh", duration: 1.5 }, "spread");

      // 3. Flip and read period
      tl.to(cardsRef.current, { rotationY: 180, stagger: 0.2, duration: 2 }, "flip");
      tl.to({}, { duration: 3 }); 
      
      // 4. Gather and exit
      tl.to(cardsRef.current, { rotationY: 0, stagger: -0.2, duration: 1.5 }, "gather")
        .to(cardsRef.current[0], { xPercent: 0, rotation: 0, duration: 1 }, "gather+=0.5")
        .to(cardsRef.current[2], { xPercent: 0, rotation: 0, duration: 1 }, "gather+=0.5")
        .to(cardsRef.current[1], { y: "0vh", duration: 1 }, "gather+=0.5")
        .to(cardsRef.current, { 
          y: "100vh", 
          opacity: 0, 
          stagger: 0.1, 
          duration: 1.5, 
          ease: "power2.in" 
        }, "gather+=1"); 

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="skills-section" id="stack">
      
      <div className="skills-hero-text" ref={textRef}>
        <p className="skills-label">DISCIPLINES&nbsp;&nbsp;<span>/03</span></p>
        <h1 className="skills-title">
          Turning architectural concepts into<br /><em>reliable production systems</em>.
        </h1>
        <p className="skills-dek">A technical overview of the systems, patterns, and technologies I apply in production.</p>
      </div>

      <div className="service_card-list"> 
        
        {/* Card 1: API Gateway & System Design */}
        <div className="service-card card-ai" ref={(el) => (cardsRef.current[0] = el)}>
          <div className="service-card_flip-front">
            <div className="card-frame">
              <div className="dot-group left"><span></span><span></span><span></span></div>
              <div className="dot-group right"><span></span><span></span><span></span></div>
            </div>
            <div className="corner top-left"><svg viewBox="0 0 100 100"><path d="M50 15 Q50 50 15 50 Q50 50 50 85 Q50 50 85 50 Q50 50 50 15 Z" fill="none" stroke="#111" strokeWidth="6"/></svg></div>
            <div className="corner top-right"><svg viewBox="0 0 100 100"><rect x="15" y="15" width="45" height="45" fill="#111"/><rect x="45" y="45" width="45" height="45" fill="#111"/></svg></div>
            <div className="corner bottom-left"><svg viewBox="0 0 100 100"><rect x="15" y="15" width="45" height="45" fill="#111"/><rect x="45" y="45" width="45" height="45" fill="#111"/></svg></div>
            <div className="corner bottom-right"><svg viewBox="0 0 100 100"><path d="M50 15 Q50 50 15 50 Q50 50 50 85 Q50 50 85 50 Q50 50 50 15 Z" fill="none" stroke="#111" strokeWidth="6"/></svg></div>
            <div className="center-shape">
              <svg viewBox="0 0 100 100"><path d="M50 10 Q50 50 10 50 Q50 50 50 90 Q50 50 90 50 Q50 50 50 10 Z" fill="none" stroke="#111" strokeWidth="1.5" /></svg>
            </div>
          </div>
          <div className="service-card_flip-back">
            <h3>API Gateway & IAM</h3>
            <ul>
              <li>Apache APISIX Dynamic Routing</li>
              <li>Keycloak IAM & JWT Lifecycle</li>
              <li>X-Consumer & Tenant Injection</li>
              <li>OpenAPI / Swagger Contract Specs</li>
            </ul>
          </div>
        </div>

        {/* Card 2: Software Engineering & Flutter */}
        <div className="service-card card-fe" ref={(el) => (cardsRef.current[1] = el)}>
          <div className="service-card_flip-front">
            <div className="card-frame">
              <div className="dot-group left"><span></span><span></span><span></span></div>
              <div className="dot-group right"><span></span><span></span><span></span></div>
            </div>
            <div className="corner top-left"><svg viewBox="0 0 100 100"><polygon points="10,10 90,10 10,90 90,90" fill="#111"/></svg></div>
            <div className="corner top-right"><svg viewBox="0 0 100 100"><path d="M 35 15 A 35 35 0 0 0 35 85 M 65 15 A 35 35 0 0 1 65 85" fill="none" stroke="#111" strokeWidth="12"/></svg></div>
            <div className="corner bottom-left"><svg viewBox="0 0 100 100"><polygon points="10,10 90,10 10,90 90,90" fill="#111"/></svg></div>
            <div className="corner bottom-right"><svg viewBox="0 0 100 100"><path d="M 35 15 A 35 35 0 0 0 35 85 M 65 15 A 35 35 0 0 1 65 85" fill="none" stroke="#111" strokeWidth="12"/></svg></div>
            <div className="center-shape">
              <svg viewBox="0 0 100 100">
                <polygon points="50,15 80.3,32.5 80.3,67.5 50,85 19.7,67.5 19.7,32.5" fill="none" stroke="#111" strokeWidth="1.5"/>
                <line x1="50" y1="50" x2="50" y2="15" stroke="#111" strokeWidth="1.5"/><line x1="50" y1="50" x2="80.3" y2="32.5" stroke="#111" strokeWidth="1.5"/><line x1="50" y1="50" x2="80.3" y2="67.5" stroke="#111" strokeWidth="1.5"/><line x1="50" y1="50" x2="50" y2="85" stroke="#111" strokeWidth="1.5"/><line x1="50" y1="50" x2="19.7" y2="67.5" stroke="#111" strokeWidth="1.5"/><line x1="50" y1="50" x2="19.7" y2="32.5" stroke="#111" strokeWidth="1.5"/>
                <circle cx="50" cy="50" r="3.5" fill="#111"/><circle cx="50" cy="15" r="3.5" fill="#111"/><circle cx="80.3" cy="32.5" r="3.5" fill="#111"/><circle cx="80.3" cy="67.5" r="3.5" fill="#111"/><circle cx="50" cy="85" r="3.5" fill="#111"/><circle cx="19.7" cy="67.5" r="3.5" fill="#111"/><circle cx="19.7" cy="32.5" r="3.5" fill="#111"/>
              </svg>
            </div>
          </div>
          <div className="service-card_flip-back">
            <h3>Software & Mobile</h3>
            <ul>
              <li>Flutter & Strongly-typed Dart</li>
              <li>BLoC / Cubit / Provider / GetX</li>
              <li>NearPay NFC Tap-on-Phone SDK</li>
              <li>Direct SQL Server Socket Drivers</li>
            </ul>
          </div>
        </div>

        {/* Card 3: System Design & Clean Architecture */}
        <div className="service-card card-se" ref={(el) => (cardsRef.current[2] = el)}>
          <div className="service-card_flip-front">
            <div className="card-frame">
              <div className="dot-group left"><span></span><span></span><span></span></div>
              <div className="dot-group right"><span></span><span></span><span></span></div>
            </div>
            <div className="corner top-left"><svg viewBox="0 0 100 100"><rect x="15" y="15" width="70" height="70" fill="none" stroke="#111" strokeWidth="10"/><circle cx="15" cy="15" r="15" fill="#111"/><circle cx="85" cy="85" r="15" fill="#111"/></svg></div>
            <div className="corner top-right"><svg viewBox="0 0 100 100"><rect x="15" y="15" width="45" height="45" fill="#111"/><rect x="45" y="45" width="45" height="45" fill="#111"/></svg></div>
            <div className="corner bottom-left"><svg viewBox="0 0 100 100"><rect x="15" y="15" width="45" height="45" fill="#111"/><rect x="45" y="45" width="45" height="45" fill="#111"/></svg></div>
            <div className="corner bottom-right"><svg viewBox="0 0 100 100"><rect x="15" y="15" width="70" height="70" fill="none" stroke="#111" strokeWidth="10"/><circle cx="15" cy="15" r="15" fill="#111"/><circle cx="85" cy="85" r="15" fill="#111"/></svg></div>
            <div className="center-shape">
              <svg viewBox="0 0 100 100">
                <polygon points="50,15 85,50 50,85 15,50" fill="none" stroke="#111" strokeWidth="1.5"/>
                <polygon points="50,30 70,50 50,70 30,50" fill="none" stroke="#111" strokeWidth="1.5"/>
                <polygon points="50,42 58,50 50,58 42,50" fill="#111"/>
              </svg>
            </div>
          </div>
          <div className="service-card_flip-back">
            <h3>Architecture & Patterns</h3>
            <ul>
              <li>Clean Architecture (Domain/Data/UI)</li>
              <li>Adapter & Strategy Patterns</li>
              <li>Offline-First SQLite Sync Queues</li>
              <li>Multi-Tenant Data Partitioning</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Stack;
