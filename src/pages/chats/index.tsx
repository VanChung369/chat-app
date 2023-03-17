import { Box, useTheme, Stack, Typography, IconButton, InputBase, Button, Divider, Badge, Avatar } from '@mui/material';
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react';
import React, { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { alpha, styled } from '@mui/material/styles';
import { faker } from '@faker-js/faker';
import { ChatList } from '@/mock';
import { SimpleBarStyle } from '@/components/Scrollbar';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.default, 1),
  marginLeft: 0,
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  height: '100%',
  padding: theme.spacing(0, 2),
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInoutBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const ChatElement = ({ id, name, image, msg, time, unread, online }: any) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: '100%',
        height: 81,
        borderRadius: 1,
        backgroundColor: theme.palette.mode === 'light' ? '#fff' : theme.palette.background.default,
      }}
      p={2}
    >
      <Stack direction={'row'} alignItems={'center'} justifyContent="space-between">
        <Stack direction={'row'} spacing={2}>
          {online ? (
            <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
              <Avatar src={faker.image.avatar()} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} />
          )}
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{msg}</Typography>
          </Stack>
        </Stack>

        <Stack spacing={2} alignItems="center">
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            {time}
          </Typography>
          <Badge className="unread-count" color="primary" badgeContent={unread} />
        </Stack>
      </Stack>
    </Box>
  );
};

const Chats = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        position: 'relative',
        width: 320,
        backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.paper,
        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Stack p={3} spacing={2} sx={{ height: '100vh' }}>
        <Stack direction={'row'} alignItems={'center'} justifyContent="space-between">
          <Typography variant="h5">{t('dashboard.txt_chats')}</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        <Stack sx={{ width: '100%' }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInoutBase placeholder={t('chats.txt_placeholder_search')!} inputProps={{ 'aria-label': 'search' }} />
          </Search>
        </Stack>
        <Stack spacing={1}>
          <Stack direction={'row'} alignItems="center" spacing={1.5}>
            <ArchiveBox size={24} />
            <Button>{t('chats.txt_archived')}</Button>
          </Stack>
          <Divider />
        </Stack>
        <Stack sx={{ flexGrow: 1, overflow: 'auto', height: '100%' }}>
          <SimpleBarStyle clickOnTrack={false}>
            <Stack spacing={2.4}>
              <Typography variant="subtitle2" sx={{ color: theme.palette.mode === 'light' ? '#676767' : 'white' }}>
                {t('chats.txt_pinned')}
              </Typography>
              {ChatList.filter((el) => el.pinned).map((el) => {
                return <ChatElement {...el} key={el.id} />;
              })}

              <Typography variant="subtitle2" sx={{ color: theme.palette.mode === 'light' ? '#676767' : 'white' }}>
                {t('chats.txt_all_chats')}
              </Typography>
              {ChatList.filter((el) => !el.pinned).map((el) => {
                return <ChatElement {...el} key={el.id} />;
              })}
            </Stack>
          </SimpleBarStyle>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chats;
