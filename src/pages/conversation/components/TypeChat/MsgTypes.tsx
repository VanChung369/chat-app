import { Message_options } from '@/mock';
import truncateString from '@/utils/truncate';
import { Box, IconButton, Menu, MenuItem, Stack, Typography, useTheme } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { DotsThreeVertical, DownloadSimple, Image } from 'phosphor-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MessageOption = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <DotsThreeVertical
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        size={20}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Stack spacing={1} px={1}>
          {Message_options.map((el) => (
            <MenuItem onClick={handleClose}>{el.title}</MenuItem>
          ))}
        </Stack>
      </Menu>
    </>
  );
};
const TextMsg = ({ el }: any) => {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={el.incoming ? 'start' : 'end'}>
      <Box
        px={1.5}
        py={1.5}
        sx={{
          backgroundColor: el.incoming ? alpha(theme.palette.background.paper, 1) : theme.palette.primary.main,
          borderRadius: 1.5,
          width: 'max-content',
        }}
      >
        <Typography variant="body2" color={el.incoming ? theme.palette.text.primary : '#fff'}>
          {el.message}
        </Typography>
      </Box>
      <MessageOption />
      {/* {menu && <MessageOption />} */}
    </Stack>
  );
};

const MediaMsg = ({ el }: any) => {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={el.incoming ? 'start' : 'end'}>
      <Box
        px={1.5}
        py={1.5}
        sx={{
          backgroundColor: el.incoming ? alpha(theme.palette.background.paper, 1) : theme.palette.primary.main,
          borderRadius: 1.5,
          width: 'max-content',
        }}
      >
        <Stack spacing={1}>
          <img src={el.img} alt={el.message} style={{ maxHeight: 210, borderRadius: '10px' }} />
          <Typography variant="body2" color={el.incoming ? theme.palette.text.primary : '#fff'}>
            {el.message}
          </Typography>
        </Stack>
      </Box>
      <MessageOption />
      {/* {menu && <MessageOption />} */}
    </Stack>
  );
};
const DocMsg = ({ el }: any) => {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={el.incoming ? 'start' : 'end'}>
      <Box
        px={1.5}
        py={1.5}
        sx={{
          backgroundColor: el.incoming ? alpha(theme.palette.background.paper, 1) : theme.palette.primary.main,
          borderRadius: 1.5,
          width: 'max-content',
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction="row"
            spacing={3}
            alignItems="center"
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Image size={48} />
            <Typography variant="caption">Abstract.png</Typography>
            <IconButton>
              <DownloadSimple />
            </IconButton>
          </Stack>
          <Typography variant="body2" color={el.incoming ? theme.palette.text.primary : '#fff'}>
            {el.message}
          </Typography>
        </Stack>
      </Box>
      <MessageOption />
      {/* {menu && <MessageOption />} */}
    </Stack>
  );
};
const LinkMsg = ({ el }: any) => {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={el.incoming ? 'start' : 'end'}>
      <Box
        px={1.5}
        py={1.5}
        sx={{
          backgroundColor: el.incoming ? alpha(theme.palette.background.paper, 1) : theme.palette.primary.main,
          borderRadius: 1.5,
          width: 'max-content',
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction="column"
            spacing={3}
            alignItems="start"
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <img src={el.preview} alt={el.message} style={{ maxHeight: 210, borderRadius: '10px' }} />
            <Stack direction={'column'} spacing={2}>
              <Typography variant="subtitle2" textAlign={'start'}>
                Creating Chat App using MERN
              </Typography>
              <Typography
                component={Link}
                to="//https://www.youtube.com"
                variant="subtitle2"
                sx={{ color: theme.palette.primary.main }}
              >
                {truncateString('www.youtube.com/watch/v12uqywHTY2', 16)}
              </Typography>
            </Stack>
          </Stack>
          <Typography variant="body2" color={el.incoming ? theme.palette.text.primary : '#fff'}>
            <div dangerouslySetInnerHTML={{ __html: el.message }}></div>
          </Typography>
        </Stack>
      </Box>
      <MessageOption />
      {/* {menu && <MessageOption />} */}
    </Stack>
  );
};
const ReplyMsg = ({ el }: any) => {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={el.incoming ? 'start' : 'end'}>
      <Box
        px={1.5}
        py={1.5}
        sx={{
          backgroundColor: el.incoming ? alpha(theme.palette.background.paper, 1) : theme.palette.primary.main,
          borderRadius: 1.5,
          width: 'max-content',
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction="column"
            spacing={3}
            alignItems="center"
            sx={{
              backgroundColor: alpha(theme.palette.background.paper, 1),

              borderRadius: 1,
            }}
          >
            <Typography variant="body2" color={theme.palette.text.primary}>
              {el.message}
            </Typography>
          </Stack>
          <Typography variant="body2" color={el.incoming ? theme.palette.text.primary : '#fff'}>
            {el.reply}
          </Typography>
        </Stack>
      </Box>
      <MessageOption />
      {/* {menu && <MessageOption />} */}
    </Stack>
  );
};

export { TextMsg, ReplyMsg, LinkMsg, DocMsg, MediaMsg };
