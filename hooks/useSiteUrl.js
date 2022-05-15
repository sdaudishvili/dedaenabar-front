/* eslint-disable no-unsafe-optional-chaining */
import { useRouter } from 'next/router';

const useSiteUrl = (path) => {
  const { asPath, locale } = useRouter();

  const prefix = locale === 'ka' ? '/ka' : '';

  const siteUrl = process.env.FRONTEND_URL?.slice(0, -1) + prefix + (path || asPath);
  return siteUrl;
};

export default useSiteUrl;
