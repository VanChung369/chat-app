import { Box, Stack } from '@mui/material';
import React, { lazy, Suspense } from 'react';
import Chats from '../chats';
import Conversation from '../conversation';

const Dashboard = () => {
  return (
    <Stack direction={'row'} sx={{ width: '100%' }}>
      <Chats />
      <Box
        sx={{
          height: '100%',
          width: 'calc(100vw - 420px)',
          backgroundColor: '#fff',
        }}
      >
        <Conversation />
      </Box>
    </Stack>
  );
};

export default Dashboard;
