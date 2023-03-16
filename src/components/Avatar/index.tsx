import React from 'react';
import { Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

const AppAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export default AppAvatar;
