import React, { useEffect, useState } from 'react';
import { Html } from '@react-three/drei';
import gsap from 'gsap';
import portfolio from '../../../../data/portfolio';

export default function Skills({ visible, infoPagesVisited }) {
  const [htmlElement, setHtmlElement] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (htmlElement?.parentElement) htmlElement.parentElement.style.pointerEvents = 'none';
  }, [htmlElement]);

  useEffect(() => {
    if (!htmlElement) return;
    gsap.to(htmlElement, visible ? {
      opacity: 1, delay: infoPagesVisited ? 2 : 3.5, duration: 1.5,
      onStart: () => { htmlElement.style.display = 'block'; },
    } : {
      opacity: 0, duration: 1.5,
      onStart: () => { htmlElement.style.pointerEvents = 'none'; },
      onComplete: () => { htmlElement.style.display = 'none'; },
    });
  }, [visible, htmlElement, infoPagesVisited]);

  return (
    <Html visible={visible} ref={setHtmlElement} style={{ opacity: 0, pointerEvents: 'none' }} prepend transform position={[0.1, 1.8, -0.4]} rotation={[-Math.PI * 0.08, 0, 0]} scale={[0.2, 0.2, 0.2]}>
      <div className="mt-5 pt-5 titilium-web"><div className="mt-5 pt-5 container">
        <div className="card border-card rounded-4" style={{ marginTop: '5rem' }}><div className="card-body text-white p-5">
          <p className="mb-2" style={{ color: '#ffff01' }}>AI × PRODUCT × DESIGN × CODE</p>
          <h2 className="card-title mb-4">TOOLKIT</h2>
          <div className="row">{portfolio.toolkit.map((skill) => <div className="col-6 mb-3 lead" key={skill}>{skill}</div>)}</div>
        </div></div>
      </div></div>
    </Html>
  );
}
