import selectSidebar from '@/redux/sidebar/selector';
import { Box, Stack, useTheme } from '@mui/material';
import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import Chats from '../chats';
import Contact from '../contact';
import Conversation from '../conversation';

const Dashboard = () => {
  const theme = useTheme();
  const sidebar = useSelector(selectSidebar.getSidebar);
  return (
    <Stack direction={'row'} sx={{ width: '100%' }}>
      <Chats />
      <Box
        sx={{
          height: '100%',
          width: sidebar.open ? 'calc(100vw - 740px)' : 'calc(100vw - 420px)',
          backgroundColor: theme.palette.mode === 'light' ? '#F0F4FA' : theme.palette.background.default,
        }}
      >
        <Conversation />
      </Box>
      {sidebar.open && <Contact />}
    </Stack>
  );
};

export default Dashboard;
