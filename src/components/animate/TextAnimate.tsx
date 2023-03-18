import { m } from 'framer-motion';
import { Box } from '@mui/material';
import { varFade } from './variants';

type textAnimateProps = {
  text: string;
  variants?: any;
  sx?: object;
};

export default function TextAnimate({ text, variants, sx, ...other }: textAnimateProps) {
  return (
    <Box
      component={m.h1}
      sx={{
        typography: 'h1',
        overflow: 'hidden',
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      {text.split('').map((letter: any, index: any) => (
        <m.span key={index} variants={variants || varFade().inUp}>
          {letter}
        </m.span>
      ))}
    </Box>
  );
}
