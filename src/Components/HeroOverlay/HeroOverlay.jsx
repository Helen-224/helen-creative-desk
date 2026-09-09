import { useEffect, useState } from 'react';

export default function HeroOverlay({ isOpen }) {
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    let pointerIsDown = false;
    const acknowledge = () => setHasInteracted(true);
    const startDrag = (event) => {
      pointerIsDown = event.button === 0;
    };
    const detectDrag = (event) => {
      if (pointerIsDown && (event.buttons & 1) === 1) acknowledge();
    };
    const endDrag = () => { pointerIsDown = false; };

    window.addEventListener('wheel', acknowledge, { once: true, passive: true });
    window.addEventListener('pointerdown', startDrag, { passive: true });
    window.addEventListener('pointermove', detectDrag, { passive: true });
    window.addEventListener('pointerup', endDrag, { passive: true });

    return () => {
      window.removeEventListener('wheel', acknowledge);
      window.removeEventListener('pointerdown', startDrag);
      window.removeEventListener('pointermove', detectDrag);
      window.removeEventListener('pointerup', endDrag);
    };
  }, []);

  return (
    <aside className={`hero-overlay${isOpen ? ' hero-overlay--open' : ''}`} aria-label="Helen Creative Desk introduction">
      <div className="hero-overlay__halo" aria-hidden="true" />
      <div className="hero-overlay__grid" aria-hidden="true" />
      <div className="hero-overlay__hairline hero-overlay__hairline--top" aria-hidden="true" />
      <div className="hero-overlay__hairline hero-overlay__hairline--side" aria-hidden="true" />
      <p className="hero-overlay__wordmark" aria-hidden="true">HELEN<br />CREATIVE DESK</p>

      <div className="hero-overlay__identity">
        <span>邱玉婷 / HELEN</span>
        <small>AI PRODUCT CREATOR</small>
      </div>
      <p className="hero-overlay__edition">PORTFOLIO / 2026</p>

      <section className="hero-overlay__campaign">
        <p className="hero-overlay__greeting">Hi，我是邱玉婷。</p>
        <h1><span>把想法，</span><span>做成真正可以被使用的产品。</span></h1>
        <p>这里放着一些，<br />我认真做出来的东西。</p>
      </section>

      <div className={`hero-overlay__hint${hasInteracted ? ' hero-overlay__hint--quiet' : ''}`}>
        <span className="hero-overlay__mouse" aria-hidden="true" />
        <p>滚轮：推进 / 拉远 <i aria-hidden="true">·</i> 按住左键拖动：环视</p>
        <small>SCROLL TO ZOOM · DRAG TO ORBIT</small>
      </div>
    </aside>
  );
}
