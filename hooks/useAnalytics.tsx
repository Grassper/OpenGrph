import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { pageview } from '@/root/lib/analytics';

function handleRouteChange(url: URL) {
  if (process.env.NODE_ENV !== 'production') return;
  pageview(url);
}

export const useAnalytics = (): void => {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);

    return function cleanup() {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};
