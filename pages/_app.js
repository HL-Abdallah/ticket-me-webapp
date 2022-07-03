import '../styles/globals.css';
import "@fontsource/poppins";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import ticketMeTheme from '../styles/ticketme-theme'


function MyApp({ Component, pageProps }) {

  return <>
      <ThemeProvider theme={ticketMeTheme}>
        <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>
  </>
}

export default MyApp
