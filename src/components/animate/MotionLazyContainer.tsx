import { LazyMotion } from 'framer-motion';
import { ReactNode } from 'react';

const loadFeatures = () => import('./features').then((res) => res.default);

type motionLazyContainerProps = {
  children?: ReactNode;
};

export default function MotionLazyContainer({ children }: motionLazyContainerProps) {
  return (
    <LazyMotion strict features={loadFeatures}>
      {children}
    </LazyMotion>
  );
}
