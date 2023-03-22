import { Chat_History } from '@/mock';
import { Box, Stack } from '@mui/material';

import React, { Fragment } from 'react';
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg } from './TypeChat/MsgTypes';
import Timeline from './TypeChat/Timeline';

function Main() {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el, idx) => {
          switch (el.type) {
            case 'divider':
              return (
                <Fragment key={idx}>
                  <Timeline el={el} />
                </Fragment>
              );
            case 'msg':
              switch (el.subtype) {
                case 'img':
                  return (
                    <Fragment key={idx}>
                      <MediaMsg el={el} />
                    </Fragment>
                  );
                case 'doc':
                  return (
                    <Fragment key={idx}>
                      <DocMsg el={el} />
                    </Fragment>
                  );
                case 'Link':
                  return (
                    <Fragment key={idx}>
                      <LinkMsg el={el} />
                    </Fragment>
                  );

                case 'reply':
                  return (
                    <Fragment key={idx}>
                      <ReplyMsg el={el} />
                    </Fragment>
                  );

                default:
                  return (
                    <Fragment key={idx}>
                      <TextMsg el={el} />
                    </Fragment>
                  );
              }

            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
}

export default Main;
