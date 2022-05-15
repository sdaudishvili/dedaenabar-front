import '@/styles/css/style.css';
import '@/styles/css/tailwind.css';
import '@/styles/sass/style.scss';
import 'swiper/swiper.scss';

import PropTypes from 'prop-types';
import { HeaderTagsRenderer } from '@/components/Common/HeaderTagsRenderer';
import { renderScriptTags } from '@/utils/renderScriptTags';

import { Layout } from '@/components/Layout';

function App({ Component, pageProps }) {
  const { analytics = {}, openGraph = {}, socialLinks = {} } = pageProps;

  React.useEffect(() => {
    renderScriptTags(document.head, analytics.headerCodes);
    renderScriptTags(document.body, analytics.bodyCodes);
  }, []);

  React.useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <>
      <HeaderTagsRenderer
        title={openGraph.title}
        description={openGraph.description}
        image={openGraph.image && process.env.STATIC_RESOURCES_URL.concat(openGraph.image)}
      >
        <meta property="og:site_name" key="ogSiteName" content={openGraph.title} />
      </HeaderTagsRenderer>
      <Layout socialLinks={socialLinks}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object
};

App.defaultProps = {
  pageProps: {}
};

export default App;
