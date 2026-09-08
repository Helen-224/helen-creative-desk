import React, { useEffect, useState } from 'react';

import gsap from 'gsap';
import { Html } from '@react-three/drei';
import portfolio from '../../../../data/portfolio';

export default function AboutMe({ visible, infoPagesVisited }) {
  const [htmlElement, setHtmlElement] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    if (htmlElement && htmlElement.parentElement) {
      htmlElement.parentElement.style.pointerEvents = 'none';
    }
  }, [htmlElement]);

  useEffect(() => {
    if (visible) {
      showPanel();
    } else {
      hidePanel();
    }
  }, [visible]);

  const showPanel = () => {
    gsap.to(htmlElement, {
      opacity: 1,
      delay: infoPagesVisited ? 2 : 3.5,
      duration: 1.5,
      onStart: () => {
        htmlElement!.style.display = 'block';
      },
    });
  };

  const hidePanel = () => {
    if (htmlElement) {
      gsap.to(htmlElement, {
        opacity: 0,
        duration: 1.5,
        onStart: () => {
          htmlElement!.style.pointerEvents = 'none';
        },
        onComplete: () => {
          htmlElement!.style.display = 'none';
        },
      });
    }
  };

  return (
    <Html
      visible={visible}
      ref={setHtmlElement}
      style={{ opacity: 0, pointerEvents: 'none' }}
      prepend
      transform
      position={[0.1, 1.8, 0]}
      rotation={[-Math.PI * 0.08, 0, 0]}
      scale={[0.2, 0.2, 0.2]}
    >
      <div className="mt-5 pt-5 titilium-web">
        <div className="container-fluid mt-5 pt-5 text-white">
          <div className="d-flex flex-column mt-5 align-items-center">
            <div className="d-flex col-sm-6 flex-column align-content-between client-info-col mt-5">
              <h2 className="mb-4" style={{ color: '#ffff01' }}>ABOUT HELEN</h2>
              {portfolio.about.map((paragraph) => <p className="lead" style={{ textAlign: 'justify' }} key={paragraph}>{paragraph}</p>)}
              <p className="lead"><strong style={{ color: '#ffff01' }}>{portfolio.identity.tagline}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </Html>
  );
}
