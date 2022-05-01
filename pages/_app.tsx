import '../styles/globals.css';
import '@fontsource/open-sans';
import '@fontsource/pt-sans';
import '@fontsource/quicksand';
import '@fontsource/source-sans-pro';
import '@fontsource/yellowtail';
import '@fontsource/lato';
import '@fontsource/yeseva-one';
import '@fontsource/josefin-sans';
import '@fontsource/open-sans-condensed';
import '@fontsource/lora';
import '@fontsource/raleway';
import '@fontsource/libre-baskerville';
import '@fontsource/rubik';
import '@fontsource/roboto-mono';
import '@fontsource/playfair-display';
import '@fontsource/quattrocento-sans';
import '@fontsource/merriweather-sans';
import '@fontsource/merriweather';
import '@fontsource/oswald';
import '@fontsource/noto-serif';
import '@fontsource/poppins';
import '@fontsource/crimson-text';
import '@fontsource/great-vibes';
import '@fontsource/montserrat';
import '@fontsource/mulish';
import '@fontsource/space-mono';
import '@fontsource/fredoka-one';
import '@fontsource/abeezee';
import '@fontsource/fjalla-one';
import '@fontsource/nunito';
import '@fontsource/teko';
import '@fontsource/bangers';
import '@fontsource/gudea';
import '@fontsource/copse';
import '@fontsource/anton';
import '@fontsource/roboto';
import '@fontsource/montserrat-alternates/400.css';
import '@fontsource/montserrat-alternates/500.css';
import '@fontsource/montserrat-alternates/600.css';
import '@fontsource/montserrat-alternates/700.css';
import '@fontsource/montserrat-alternates/800.css';

import type { AppProps } from 'next/app';
import { DefaultSeo, NextSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';

import { useAnalytics } from '@/root/hooks/useAnalytics';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useAnalytics();

  return (
    <>
      <NextSeo
        canonical="https://www.opengrph.blockscribers.com"
        description="Create elegant looking opengraph and cover images for your blog, videos just by click of button!"
        title="OpenGrph"
      />
      <DefaultSeo
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'icon',
            href: '/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            rel: 'icon',
            href: '/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            rel: 'icon',
            href: '/favicon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            rel: 'icon',
            href: '/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-icon-57x57.png',
            sizes: '57x57',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-icon-60x60.png',
            sizes: '60x60',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-icon-72x72.png',
            sizes: '72x72',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-icon-76x76.png',
            sizes: '76x76',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-icon-114x114.png',
            sizes: '114x114',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-icon-120x120.png',
            sizes: '120x120',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-icon-144x144.png',
            sizes: '144x144',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-icon-152x152.png',
            sizes: '152x152',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-icon-180x180.png',
            sizes: '180x180',
          },
          {
            rel: 'manifest',
            href: '/manifest.json',
          },
        ]}
        additionalMetaTags={[
          {
            name: 'msapplication-TileColor',
            content: '#ffffff',
          },
          {
            name: 'msapplication-TileImage',
            content: '/ms-icon-144x144.png',
          },
          {
            name: 'theme-color',
            content: '#ffffff',
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
          {
            name: 'Author',
            content: 'Vadivazhagan Vadivel',
          },
          {
            httpEquiv: 'x-ua-compatible',
            content: 'ie=edge',
          },
        ]}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://www.opengrph.blockscribers.com/',
          site_name: 'opengrph',
        }}
      />
      <ThemeProvider attribute="class" enableSystem={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};
export default MyApp;
