import { getAnalytics, getOpengraph, getSocialLinks } from '@/api/common';

export const withDefaultProps = (cb) => async (context) => {
  const fetchData = () =>
    Promise.all([getAnalytics(), getOpengraph({ languageCode: context.locale }), getSocialLinks()]);

  const [analytics, openGraph, socialLinks] = await fetchData();
  return cb(context, {
    analytics,
    openGraph,
    socialLinks
  });
};
