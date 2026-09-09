// * LIBRARIES
import { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bounds, ContactShadows } from '@react-three/drei';
import { Leva } from 'leva';

// * COMPONENTS
import Experience from '../../Experience';
import HeroOverlay from '../HeroOverlay/HeroOverlay';
import { interpolateFunc, backgroundSetter } from '../../Utils/utils';
import useNotebook from '../../store/useNotebook';

const ExperienceWrapper = () => {
  const isOpen = useNotebook((state) => state.isOpen);

  useEffect(() => {
    backgroundSetter();
  }, []);

  return (
    <>
      <Leva collapsed hidden/>
      <Canvas
        gl={{ alpha: true }}
        camera={{
          fov: 60,
          near: 0.1,
          far: 100,
        }}
      >
        <Bounds interpolateFunc={interpolateFunc}>
          <Experience />
        </Bounds>
        <ContactShadows
          opacity={0.35}
          scale={7.5}
          blur={1.2}
          color={'#6f6a61'}
          position={[0, -0.9, 0]}
        />
      </Canvas>
      <HeroOverlay isOpen={isOpen} />
    </>
  );
};

export default ExperienceWrapper;
