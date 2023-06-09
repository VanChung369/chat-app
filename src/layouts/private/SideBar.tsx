import React, { useState } from 'react';
import LogoIcon from '../../resources/svg/react.svg';
import { styled } from '@mui/material/styles';
import { faker } from '@faker-js/faker';
import { Nav_Buttons, Profile_Menu } from '@/mock';
import { Avatar, Divider, IconButton, Menu, MenuItem } from '@mui/material';
import { Box, useTheme, Stack } from '@mui/system';
import { Gear } from 'phosphor-react';
import useSettings from '@/hooks/useSettings';
import AntSwitch from '@/components/AntSwitch';

const CustomizedImage = styled('img')`
  position: absolute;
  z-index: 0;
  top: 30px;
  left: 32px;
`;

const SideBar = () => {
  const theme = useTheme();
  const [select, setSelect] = useState(0);
  const { onToggleMode } = useSettings();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      p={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
        height: '100vh',
        width: 100,
      }}
    >
      <Stack
        direction={'column'}
        justifyContent="space-between"
        alignItems={'center'}
        sx={{ with: '100%', height: '100%' }}
        spacing={3}
      >
        <Stack alignItems={'center'} spacing={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              borderRadius: 1.5,
              height: 64,
              width: 64,
            }}
          >
            <CustomizedImage src={LogoIcon} alt={'logo'} loading="lazy" />
          </Box>
          <Stack sx={{ width: 'max-content' }} direction="column" alignItems={'center'} spacing={3}>
            {Nav_Buttons.map((el) =>
              el.index === select ? (
                <Box p={1} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }} key={el.index}>
                  <IconButton
                    sx={{
                      width: 'max-content',
                      color: 'white',
                    }}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    setSelect(el.index);
                  }}
                  key={el.index}
                  sx={{
                    width: 'max-content',
                    color: theme.palette.mode === 'light' ? 'black' : theme.palette.text.primary,
                  }}
                >
                  {el.icon}
                </IconButton>
              ),
            )}
            <Divider sx={{ width: '48px' }} />
            {select === 3 ? (
              <Box p={1} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                <IconButton sx={{ width: 'max-content', color: 'white' }}>
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => {
                  setSelect(3);
                }}
                sx={{
                  width: 'max-content',
                  color: theme.palette.mode === 'light' ? 'black' : theme.palette.text.primary,
                }}
              >
                <Gear />
              </IconButton>
            )}
          </Stack>
        </Stack>
        <Stack spacing={4}>
          <AntSwitch
            onChange={() => {
              onToggleMode();
            }}
            defaultChecked
          />
          <Avatar
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            alt="avatar"
            src={faker.image.avatar()}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <Stack spacing={1} px={1}>
              {Profile_Menu.map((el) => (
                <MenuItem onClick={handleClose}>
                  <Stack sx={{ width: 100 }} direction="row" alignItems={'center'} justifyContent="space-between">
                    <span>{el.title}</span> {el.icon}
                  </Stack>
                </MenuItem>
              ))}
            </Stack>
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideBar;
