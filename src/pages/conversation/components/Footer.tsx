import { Box, Stack, IconButton, TextField, InputAdornment, useTheme, Fab, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { LinkSimple, PaperPlaneTilt, Smiley, Camera, File, Image, Sticker, User } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiFilledInput-root': {
    borderRadius: '10px',
  },

  '& .MuiInputBase-input': {
    paddingTop: '12px',
    paddingBottom: '12px',
  },
}));

const Actions = [
  {
    color: '#4da5fe',
    icon: <Image size={24} />,
    y: 102,
    title: 'Photo/Video',
  },
  {
    color: '#1b8cfe',
    icon: <Sticker size={24} />,
    y: 172,
    title: 'Stickers',
  },
  {
    color: '#0172e4',
    icon: <Camera size={24} />,
    y: 242,
    title: 'Image',
  },
  {
    color: '#0159b2',
    icon: <File size={24} />,
    y: 312,
    title: 'Document',
  },
  {
    color: '#013f7f',
    icon: <User size={24} />,
    y: 382,
    title: 'Contact',
  },
];

const ChatInput = ({ t, setOpenPicker }: any) => {
  const [opneAction, setOpenAction] = useState(false);
  return (
    <StyledTextField
      fullWidth
      placeholder={t('conversation.txt_write_a_message')!}
      variant="filled"
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <Stack sx={{ width: 'max-content' }}>
            <Stack sx={{ position: 'relative', display: opneAction ? 'inline-block' : 'none' }}>
              {Actions.map((el, index) => (
                <Tooltip placement="right" title={el.title} key={index}>
                  <Fab sx={{ position: 'absolute', top: -el.y, backgroundColor: el.color }}>{el.icon}</Fab>
                </Tooltip>
              ))}
            </Stack>
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  setOpenAction((prev: boolean) => !prev);
                }}
              >
                <LinkSimple />
              </IconButton>
            </InputAdornment>
          </Stack>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => {
                setOpenPicker((prev: boolean) => !prev);
              }}
            >
              <Smiley />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

function Footer() {
  const { t } = useTranslation();
  const theme = useTheme();
  const [openPicker, setOpenPicker] = useState(false);

  return (
    <Box
      p={2}
      sx={{
        width: '100%',
        backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.paper,
        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Stack direction={'row'} alignItems="center" spacing={3}>
        <Stack sx={{ width: '100%' }}>
          <Box sx={{ display: openPicker ? 'inline' : 'none', zIndex: 10, position: 'fixed', bottom: 81, right: 100 }}>
            <Picker theme={theme.palette.mode} data={data} onEmojiSelect={console.log} />
          </Box>

          <ChatInput t={t} setOpenPicker={setOpenPicker} />
        </Stack>

        <Box sx={{ height: 48, width: 48, backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
          <Stack sx={{ height: '100%', width: '100%' }} alignItems="center" justifyContent="center">
            <IconButton>
              <PaperPlaneTilt color="#fff" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default Footer;
