import { Divider, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';

function Timeline({ el }: any) {
  const theme = useTheme();
  return (
    <Stack direction={'row'} alignItems="center" justifyContent={'space-between'}>
      <Divider sx={{ width: '46%' }} />
      <Typography variant="caption" sx={{ color: theme.palette.text.primary }}>
        {el.text}
      </Typography>
      <Divider sx={{ width: '46%' }} />
    </Stack>
  );
}

export default Timeline;
