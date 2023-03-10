import { BrowserRouter } from 'react-router-dom';
import { MessagesProvider } from './contexts/MessagesContext';
import { Router } from './router';

import { StyledToastContainer } from './styles/toast';
import { Zoom } from 'react-toastify';
import { GlobalStyled } from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import { CustomThemeProvider } from './contexts/CustomThemeContext';

export function App() {
  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <MessagesProvider>
          <Router />
        </MessagesProvider>
      </BrowserRouter>
      <StyledToastContainer transition={Zoom} />
      <GlobalStyled />
    </CustomThemeProvider>
  );
}
