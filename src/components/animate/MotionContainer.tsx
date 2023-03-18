import { m } from 'framer-motion';
import { Box } from '@mui/material';
import { varContainer } from './variants';
import { ReactNode } from 'react';

type motionContainerProps = {
  children: ReactNode;
  animate?: boolean;
  action?: boolean;
};

export default function MotionContainer({ animate, action = false, children, ...other }: motionContainerProps) {
  if (action) {
    return (
      <Box
        component={m.div}
        initial={false}
        animate={animate ? 'animate' : 'exit'}
        variants={varContainer()}
        {...other}
      >
        {children}
      </Box>
    );
  }

  return (
    <Box component={m.div} initial="initial" animate="animate" exit="exit" variants={varContainer()} {...other}>
      {children}
    </Box>
  );
}
