import { Radio, FormControlLabel } from '@mui/material';

type boxMaskProps = {
  value: string;
};

export default function BoxMask({ value }: boxMaskProps) {
  return (
    <FormControlLabel
      label=""
      value={value}
      control={<Radio sx={{ display: 'none' }} />}
      sx={{
        m: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        position: 'absolute',
      }}
    />
  );
}
