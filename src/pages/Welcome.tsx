import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import '../pages/Welcome.css';

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        navigate('/home');
      }
    });

    const bodyBefore = CSSRulePlugin.getRule('body:before');
    const bodyAfter = CSSRulePlugin.getRule('body:after');

    tl.to(bodyBefore, { duration: 0.2, cssRule: { top: '50%' }, ease: "power2.out" }, "close")
      .to(bodyAfter, { duration: 0.2, cssRule: { bottom: '50%' }, ease: "power2.out" }, "close")
      .to(loaderRef.current, { duration: 0.2, opacity: 1 })
      .to(bodyBefore, { duration: 0.2, cssRule: { top: '0%' }, ease: "power2.out" }, "+=1.5")
      .to(bodyAfter, { duration: 0.2, cssRule: { bottom: '0%' }, ease: "power2.out" }, "-=0.2")
      // Force the loader to remain visible at the end
      .set(loaderRef.current, { opacity: 1 });
  };

  return (
    <>
      <div className={`welcome-page ${isAnimating ? 'exit-animation' : ''}`}>
        <h1>Welcome to Lewis.dev</h1>
        <p>Time to get shwifty</p>
        <div className="animated-arrow">&#8595;</div>
        <button onClick={handleEnter}>Enter</button>
      </div>
      {/* Loader is rendered outside of the welcome-page container */}
      <div className="loader" ref={loaderRef}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
        <div className="bar4"></div>
        <div className="bar5"></div>
        <div className="bar6"></div>
      </div>
    </>
  );
};

export default Welcome;
