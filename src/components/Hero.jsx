import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE } from "../data/site";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ play }) {
  const sectionRef = useRef();
  const glowRef = useRef();

  useEffect(() => {
    if (!play) return;

    let mm = gsap.matchMedia();

    // Desktop Animations
    mm.add("(min-width: 951px)", () => {
      // Center cards
      gsap.set(".ui-card", { xPercent: -50, yPercent: -50 });

      const tlEnter = gsap.timeline();

      // Card entrance
      tlEnter.fromTo(
        ".ui-card",
        {
          y: 800,
          autoAlpha: 0,
          rotation: () => gsap.utils.random(-10, 10),
        },
        {
          y: 0,
          autoAlpha: 1,
          rotation: 0,
          duration: 1.5,
          stagger: 0.1,
          ease: "back.out(1.2)",
        }
      );

      // Continuous floating cards
      tlEnter.add(() => {
        gsap.to(".ui-card", {
          y: "-=12",
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          stagger: 0.2,
          ease: "sine.inOut",
        });
      });

      // Mouse glow
      const onMouseMove = (e) => {
        if (!sectionRef.current || !glowRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(glowRef.current, {
          x: x,
          y: y,
          duration: 1.5,
          ease: "power3.out",
        });
      };

      window.addEventListener("mousemove", onMouseMove);

      // 3D Hover effect
      const cardCleanups = [];
      gsap.utils.toArray(".ui-card").forEach((card) => {
        const handleMove = (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const rotateX = ((y - centerY) / centerY) * -1.5;
          const rotateY = ((x - centerX) / centerX) * 1.5;

          gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 1000,
            ease: "power2.out",
            duration: 0.4,
          });
        };

        const handleLeave = () => {
          gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            ease: "power3.out",
            duration: 0.8,
          });
        };

        card.addEventListener("mousemove", handleMove);
        card.addEventListener("mouseleave", handleLeave);
        cardCleanups.push(() => {
          card.removeEventListener("mousemove", handleMove);
          card.removeEventListener("mouseleave", handleLeave);
        });
      });

      // Desktop ScrollTrigger
      const tlScroll = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      tlScroll
        .fromTo(
          ".card-bio",
          { opacity: 1 },
          {
            yPercent: -150,
            opacity: 0,
            scale: 0.9,
            rotation: -5,
            duration: 1,
            immediateRender: false,
          },
          0
        )
        .fromTo(
          ".card-photo",
          { opacity: 1 },
          {
            yPercent: -250,
            opacity: 0,
            scale: 1.1,
            rotation: 12,
            duration: 1,
            immediateRender: false,
          },
          0
        )
        .fromTo(
          ".card-stats",
          { opacity: 1 },
          {
            yPercent: -100,
            opacity: 0,
            scale: 0.8,
            rotation: -15,
            duration: 1,
            immediateRender: false,
          },
          0
        )
        .fromTo(
          ".card-phil",
          { opacity: 1 },
          {
            yPercent: -300,
            opacity: 0,
            scale: 1.05,
            rotation: 8,
            duration: 1,
            immediateRender: false,
          },
          0
        )
        .fromTo(
          ".card-tech",
          { opacity: 1 },
          {
            yPercent: -180,
            opacity: 0,
            scale: 0.95,
            rotation: -8,
            duration: 1,
            immediateRender: false,
          },
          0
        );

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        cardCleanups.forEach((c) => c());
      };
    });

    // Mobile Animations (Clean Reveal without breaking natural flow)
    mm.add("(max-width: 950px)", () => {
      gsap.fromTo(
        ".ui-card",
        {
          autoAlpha: 0,
          y: 25,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    });

    return () => mm.revert();
  }, [play]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="hero-canvas-section"
    >
      <style>
        {`
          .hero-canvas-section {
            min-height: 100vh;
            width: 100%;
            background-color: var(--paper);
            position: relative;
            overflow: hidden;
            z-index: 1;
            background-image:
              url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E"),
              radial-gradient(var(--ink-faint) 1px, transparent 1px);
            background-size: auto, 30px 30px;
            perspective: 1200px;
          }

          .mouse-glow {
            position: absolute;
            top: 0;
            left: 0;
            width: 800px;
            height: 800px;
            background: radial-gradient(
              circle,
              var(--accent-soft) 0%,
              var(--accent-muted) 40%,
              transparent 70%
            );
            transform: translate(-50%, -50%);
            border-radius: 50%;
            filter: blur(60px);
            will-change: transform;
            pointer-events: none;
            z-index: 0;
          }

          .ui-card {
            position: absolute;
            border-radius: 24px;
            box-shadow: 0 20px 40px var(--accent-muted);
            padding: 2.2rem;
            display: flex;
            flex-direction: column;
            will-change: transform, top, left, opacity, visibility;
            transition:
              box-shadow 0.4s ease,
              border-color 0.4s ease;
            opacity: 0;
            visibility: hidden;
            transform-style: preserve-3d;
          }

          .ui-card:hover {
            box-shadow: 0 30px 60px var(--accent-soft);
            border-color: var(--accent) !important;
            z-index: 20 !important;
          }

          .card-bio {
            top: 50%;
            left: 50%;
            width: 550px;
            background: var(--paper-2);
            border: 1px solid var(--line);
            z-index: 10;
          }

          .card-stats {
            top: calc(50% - 180px);
            left: calc(50% - 370px);
            width: 220px;
            background: var(--paper-2);
            border: 1px solid var(--line);
            z-index: 5;
            text-align: center;
          }

          .card-stats .stat-divider {
            height: 1px;
            width: 100%;
            background: var(--line);
            margin: 1rem 0;
          }

          .card-photo {
            top: calc(50% - 150px);
            left: calc(50% + 400px);
            width: 280px;
            background: var(--ink);
            color: var(--paper);
            z-index: 5;
            padding: 1.5rem;
            overflow: hidden;
          }

          .card-phil {
            top: calc(50% + 180px);
            left: calc(50% - 400px);
            width: 320px;
            background: var(--ink);
            color: var(--paper);
            z-index: 5;
            border: 1px solid var(--bone-faint);
          }

          .card-tech {
            top: calc(50% + 200px);
            left: calc(50% + 410px);
            width: 300px;
            background: var(--paper-2);
            border: 1px solid var(--line);
            z-index: 5;
          }

          .img-scan-container {
            position: relative;
            width: 100%;
            height: 220px;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 1rem;
          }

          .img-scan-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: grayscale(80%) contrast(1.1);
            transition: 0.4s ease;
          }

          .card-photo:hover img {
            filter: grayscale(0%);
            transform: scale(1.05);
          }

          .status-dot {
            width: 8px;
            height: 8px;
            background: #4ade80;
            border-radius: 50%;
            box-shadow: 0 0 10px #4ade80;
            animation: pulse-green 2s infinite;
          }

          @keyframes pulse-green {
            0% {
              box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7);
            }

            70% {
              box-shadow: 0 0 0 6px rgba(74, 222, 128, 0);
            }

            100% {
              box-shadow: 0 0 0 0 rgba(74, 222, 128, 0);
            }
          }

          .tag-label {
            font-family: var(--font-mono);
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 1rem;
            display: block;
            color: var(--accent);
          }

          .bio-title {
            font-size: 2.2rem;
            font-weight: 800;
            line-height: 1.1;
            color: var(--ink);
            margin: 0 0 1rem 0;
            letter-spacing: -1px;
          }

          .bio-title em {
            color: var(--accent);
          }

          .bio-text {
            font-size: 1.05rem;
            color: var(--ink-soft);
            line-height: 1.6;
            margin: 0;
          }

          .stat-num {
            font-size: 3.5rem;
            font-family: var(--font-fraunces);
            color: var(--accent);
            margin: 0;
            line-height: 1;
          }

          .stat-text {
            font-family: var(--font-mono);
            font-size: 0.7rem;
            color: var(--ink-faint);
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .phil-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
          }

          .phil-item {
            display: flex;
            align-items: center;
            gap: 15px;
            border-bottom: 1px solid var(--bone-faint);
            padding-bottom: 1rem;
            transition: 0.3s;
          }

          .phil-item:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }

          .phil-item:hover {
            transform: translateX(5px);
            color: var(--accent);
          }

          .phil-num {
            font-family: var(--font-mono);
            color: var(--accent);
            font-size: 1.2rem;
            font-weight: bold;
          }

          .phil-text {
            font-size: 1.05rem;
            font-weight: 500;
            letter-spacing: 0.5px;
            color: var(--paper);
          }

          .tech-pills {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 1rem;
          }

          .tech-pill {
            padding: 6px 12px;
            border-radius: 50px;
            border: 1px solid var(--line);
            font-size: 0.8rem;
            color: var(--ink-soft);
            font-family: var(--font-mono);
            font-weight: bold;
            transition: all 0.3s;
            cursor: default;
          }

          .tech-pill:hover {
            background: var(--accent);
            color: var(--paper);
            border-color: var(--accent);
            transform: translateY(-4px);
            box-shadow: 0 8px 15px var(--accent-soft);
          }

          /* =========================================
             RESPONSIVE MOBILE & TABLET STYLING
             ========================================= */
          @media (max-width: 950px) {
            .hero-canvas-section {
              padding-top: max(85px, 11vh);
              padding-bottom: 4rem;
              padding-left: 1rem;
              padding-right: 1rem;
              height: auto !important;
              min-height: auto !important;
              display: flex;
              flex-direction: column;
              align-items: center;
              overflow: visible;
            }

            .mouse-glow {
              display: none;
            }

            .ui-card {
              position: relative !important;
              top: auto !important;
              left: auto !important;
              right: auto !important;
              bottom: auto !important;
              transform: none !important;
              width: 100% !important;
              max-width: 480px !important;
              margin: 0.75rem auto !important;
              padding: 1.6rem 1.35rem !important;
              border-radius: 20px !important;
              opacity: 1 !important;
              visibility: visible !important;
              z-index: 1 !important;
            }

            /* 1. Photo & Identity at the top */
            .card-photo {
              order: 1;
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .card-photo .img-scan-container {
              max-width: 220px;
              height: 220px;
              margin: 0 auto 1.25rem auto;
            }

            .card-photo h3 {
              font-size: 1.3rem !important;
            }

            /* 2. Main Bio Card */
            .card-bio {
              order: 2;
            }

            .bio-title {
              font-size: clamp(1.5rem, 5.5vw, 2.1rem) !important;
              line-height: 1.2 !important;
            }

            .bio-text {
              font-size: 0.95rem !important;
              line-height: 1.6 !important;
            }

            /* 3. Quick Stats (Side by side on mobile) */
            .card-stats {
              order: 3;
              display: flex !important;
              flex-direction: row !important;
              justify-content: space-around !important;
              align-items: center !important;
              padding: 1.25rem 1rem !important;
            }

            .card-stats .stat-item {
              flex: 1;
              text-align: center;
            }

            .card-stats .stat-divider {
              width: 1px !important;
              height: 45px !important;
              background: var(--line) !important;
              margin: 0 0.75rem !important;
            }

            .stat-num {
              font-size: 2.2rem !important;
            }

            .stat-text {
              font-size: 0.65rem !important;
            }

            /* 4. Core Arsenal */
            .card-tech {
              order: 4;
            }

            /* 5. Philosophy */
            .card-phil {
              order: 5;
            }

            .phil-item {
              gap: 12px;
              padding-bottom: 0.85rem;
            }

            .phil-text {
              font-size: 0.92rem;
            }
          }
        `}
      </style>

      <div className="mouse-glow" ref={glowRef}></div>

      {/* 1. Stats Card */}
      <div className="ui-card card-stats">
        <div className="stat-item">
          <h2 className="stat-num">12+</h2>
          <p className="stat-text">Production Systems</p>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-item">
          <h2 className="stat-num">100%</h2>
          <p className="stat-text">Gateway Isolation</p>
        </div>
      </div>

      {/* 2. Photo & Identity Card */}
      <div className="ui-card card-photo">
        <div className="img-scan-container">
          <img src={`${import.meta.env.BASE_URL}imgs/Profile.jpg`} alt="Mahmoud El-Tantawy" />
        </div>

        <h3
          style={{
            margin: "0 0 0.2rem 0",
            fontSize: "1.2rem",
            fontWeight: "900",
            letterSpacing: "1px",
          }}
        >
          MAHMOUD EL-TANTAWY
        </h3>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div className="status-dot"></div>

          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--ink-faint)",
            }}
          >
            SOFTWARE ENGINEER • ARCHITECTURE
          </p>
        </div>
      </div>

      {/* 3. Bio & Headline Card */}
      <div className="ui-card card-bio">
        <span className="tag-label">// SOFTWARE ARCHITECTURE & SYSTEMS</span>

        <h1 className="bio-title">
          I build{" "}
          <em style={{ fontFamily: "var(--font-fraunces)" }}>
            resilient systems
          </em>{" "}
          and API Gateways that scale.
        </h1>

        <p className="bio-text">
          Software Engineer with hands-on experience bridging client-side engineering, system design, API management, and distributed system architectures — from Flutter apps to Apache APISIX & Keycloak IAM.
        </p>
      </div>

      {/* 4. Philosophy Card */}
      <div className="ui-card card-phil">
        <span
          className="tag-label"
          style={{ opacity: 0.9 }}
        >
           HOW I THINK
        </span>

        <ul className="phil-list">
          <li className="phil-item">
            <span className="phil-num">01.</span>
            <span className="phil-text">Define Clean Boundaries</span>
          </li>

          <li className="phil-item">
            <span className="phil-num">02.</span>
            <span className="phil-text">Design for Failure & Sync</span>
          </li>

          <li className="phil-item">
            <span className="phil-num">03.</span>
            <span className="phil-text">Centralize Gateway Concerns</span>
          </li>
        </ul>
      </div>

      {/* 5. Core Arsenal Card */}
      <div className="ui-card card-tech">
        <span className="tag-label">CORE ARSENAL</span>

        <div className="tech-pills">
          <span className="tech-pill">Apache APISIX</span>
          <span className="tech-pill">System Design</span>
          <span className="tech-pill">Keycloak IAM</span>
          <span className="tech-pill">Clean Architecture</span>
          <span className="tech-pill">Flutter & Dart</span>
          <span className="tech-pill">Offline Sync</span>
          <span className="tech-pill">SQL Server</span>
          <span className="tech-pill">Adapter Pattern</span>
        </div>
      </div>
    </section>
  );
}
