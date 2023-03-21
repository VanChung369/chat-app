import { Box, Stack, useTheme } from '@mui/material';
import React, { lazy, Suspense } from 'react';
import Chats from '../chats';
import Conversation from '../conversation';

const Dashboard = () => {
  const theme = useTheme();
  return (
    <Stack direction={'row'} sx={{ width: '100%' }}>
      <Chats />
      <Box
        sx={{
          height: '100%',
          width: 'calc(100vw - 420px)',
          backgroundColor: theme.palette.mode === 'light' ? 'while' : theme.palette.background.default,
        }}
      >
        <Conversation />
      </Box>
    </Stack>
  );
};

export default Dashboard;
