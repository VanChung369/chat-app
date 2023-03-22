import { faker } from '@faker-js/faker';
import { Box, Stack, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { SimpleBarStyle } from '@/components/Scrollbar';

const Conversation = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Stack height={'100%'} width={'auto'} maxHeight={'100vh'}>
      <Header />
      <Box width={'100%'} sx={{ flexGrow: 1, height: '100%', overflow: 'hidden' }}>
        <SimpleBarStyle clickOnTrack={false}>
          <Main />
        </SimpleBarStyle>
      </Box>
      <Footer />
    </Stack>
  );
};

export default Conversation;
