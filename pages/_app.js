import '@/styles/css/style.css';
import '@/styles/css/tailwind.css';
import '@/styles/sass/style.scss';
import 'swiper/swiper.scss';

import PropTypes from 'prop-types';

import { Layout } from '@/components/Layout';
import { HeaderTagsRenderer } from '@/components/HeaderTagsRenderer';

function App({ Component, pageProps }) {
  React.useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <>
      <HeaderTagsRenderer title="Dedaena Bar" description="Dedaena Bar" image="/dedaena.png">
        <meta property="og:site_name" key="ogSiteName" content="Dedaena Bar" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </HeaderTagsRenderer>
      <Layout>
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
