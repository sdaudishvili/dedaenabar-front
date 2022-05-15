/* eslint-disable jsx-a11y/iframe-has-title */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta property="og:type" key="ogType" content="website" />
          <meta name="twitter:card" key="twitterCard" content="website" />
          <meta name="twitter:site" key="twitterSite" content="@DedaenaBar" />
          <meta name="twitter:creator" key="twitterCreator" content="@DedaenaBar" />
          <link rel="icon" type="image/png" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
