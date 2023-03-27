import AntSwitch from '@/components/AntSwitch';
import { toggleSidebar } from '@/redux/sidebar/slice';
import { faker } from '@faker-js/faker';
import { Box, IconButton, Stack, Typography, Avatar, useTheme, Divider, Button } from '@mui/material';
import { Bell, CaretRight, Phone, Prohibit, Star, Trash, VideoCamera, X } from 'phosphor-react';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <Box sx={{ width: 320, height: '100vh' }}>
      <Stack sx={{ height: '100%' }}>
        <Box
          sx={{
            boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
            width: '100%',
            backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.default,
          }}
        >
          <Stack
            sx={{ height: '100%', p: 2 }}
            direction="row"
            alignItems={'center'}
            justifyContent="space-between"
            spacing={3}
          >
            <Typography variant="subtitle2">{t('contact.txt_contact_info')}</Typography>
            <IconButton
              onClick={() => {
                dispatch(toggleSidebar());
              }}
            >
              <X />
            </IconButton>
          </Stack>
        </Box>
        <Stack sx={{ height: '100%', position: 'relative', flexGrow: 1, overflowY: 'scroll' }} p={3} spacing={3}>
          <Stack alignItems={'center'} direction="row" spacing={2}>
            <Avatar src={faker.image.avatar()} alt={faker.name.firstName()} sx={{ height: 64, width: 64 }} />
            <Stack spacing={0.5}>
              <Typography variant="inherit"> {faker.name.fullName()}</Typography>
              <Typography variant="body2"> {'+96 56231643132'}</Typography>
            </Stack>
          </Stack>

          <Stack alignItems={'center'} direction="row" justifyContent={'space-evenly'}>
            <Stack spacing={1} alignItems="center">
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant="overline"> {t('contact.txt_voice')}</Typography>
            </Stack>

            <Stack spacing={1} alignItems="center">
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant="overline"> {t('contact.txt_audio')}</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={0.5}>
            <Typography variant="caption"> {t('contact.txt_about')}</Typography>
            <Typography variant="body2"> {t('contact.txt_text')}</Typography>
          </Stack>
          <Divider />

          <Stack alignItems={'center'} direction="row" justifyContent={'space-between'}>
            <Typography variant="subtitle2"> {t('contact.txt_media')}</Typography>
            <Button endIcon={<CaretRight />}>201</Button>
          </Stack>

          <Stack alignItems={'center'} direction="row" spacing={2}>
            {[1, 2, 3].map((el, idx): any => (
              <Box key={idx}>
                <img src={faker.image.food()} alt={faker.name.fullName()} />
              </Box>
            ))}
          </Stack>

          <Divider />
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Stack alignItems={'center'} direction="row" spacing={2}>
              <Star size={21} />
              <Typography variant="subtitle2"> {t('contact.txt_starred_messages')}</Typography>
            </Stack>
            <IconButton>
              <CaretRight />
            </IconButton>
          </Stack>

          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Stack alignItems={'center'} direction="row" spacing={2}>
              <Bell size={21} />
              <Typography variant="subtitle2"> {t('contact.txt_mute_notifications')}</Typography>
            </Stack>
            <AntSwitch />
          </Stack>

          <Divider />

          <Typography>1 group in common</Typography>

          <Stack direction={'row'} alignItems={'center'} spacing={2}>
            <Avatar src={faker.image.avatar()} alt={faker.name.fullName()}></Avatar>
            <Stack spacing={0.5}>
              <Typography variant="subtitle2">Camel’s Gang</Typography>
              <Typography variant="caption">Owl, Parrot, Rabbit , You</Typography>
            </Stack>
          </Stack>

          <Stack direction={'row'} alignItems={'center'} spacing={2}>
            <Button startIcon={<Prohibit />} fullWidth variant="outlined">
              Block
            </Button>
            <Button startIcon={<Trash />} fullWidth variant="outlined">
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;
