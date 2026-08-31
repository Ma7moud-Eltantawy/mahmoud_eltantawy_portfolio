import React from "react";
import { SITE } from "../data/site";
import "./Journey.css";

export default function Journey() {
  const milestones = SITE.journey.milestones;

  return (
    <section className="journey-light" id="journey">
      
      <div className="journey-header-top">
        <h2 className="journey-title">
          A career trajectory shaped by <span className="accent">systems, engineering,</span> and <span className="accent">scalability.</span>
        </h2>
        <p className="journey-subtitle">
          {SITE.journey.note}
        </p>
      </div>

      <div className="journey-grid-full">
        <div className="diamond-grid">
          
          <div className="center-star">
            <svg viewBox="0 0 24 24" fill="var(--accent)">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
            </svg>
          </div>

          {milestones.map((item, index) => {
            const positions = ["pos-top", "pos-right", "pos-bottom", "pos-left"];
            const pos = positions[index % 4];
            return (
              <div className={`diamond-card ${pos}`} key={index}>
                <div className="card-inner-content">
                  
                  <div className="icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"/>
                      <polyline points="8 6 2 12 8 18"/>
                    </svg>
                  </div>
                  
                  <h3 className="step-number">0{index + 1}</h3>
                  <p className="place">{item.org}</p>
                  <p className="status">{item.year}</p>
                  <h4 className="card-title">{item.title}</h4>
                  <p className="card-desc">{item.desc}</p>
                  
                  <div className="card-tags">
                    {item.chips.map((tag, i) => (
                      <span className="tag" key={i}>{tag}</span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
          
        </div>
      </div>

    </section>
  );
}
