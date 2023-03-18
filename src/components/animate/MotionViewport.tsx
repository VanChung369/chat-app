import { m } from 'framer-motion';
import { Box } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';
import { varContainer } from './variants';
import { ReactNode } from 'react';

type motionViewportProps = {
  children: ReactNode;
  disableAnimatedMobile?: boolean;
};

export default function MotionViewport({ children, disableAnimatedMobile = false, ...other }: motionViewportProps) {
  const isMobile = useResponsive('down', 'sm');

  if (isMobile && disableAnimatedMobile) {
    return <Box {...other}>{children}</Box>;
  }

  return (
    <Box
      component={m.div}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={varContainer()}
      {...other}
    >
      {children}
    </Box>
  );
}
