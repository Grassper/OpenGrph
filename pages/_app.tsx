import '../styles/globals.css';
import '@fontsource/source-code-pro/400.css';
import '@fontsource/open-sans/800.css';
import '@fontsource/quicksand/400.css';
import '@fontsource/pt-sans/400.css';
import '@fontsource/lato/400.css';
import '@fontsource/yellowtail/400.css';
import '@fontsource/josefin-sans/400.css';
import '@fontsource/yeseva-one/400.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default MyApp;
