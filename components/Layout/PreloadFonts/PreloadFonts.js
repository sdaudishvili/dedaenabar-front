import Head from 'next/head';

const extensions = ['otf', 'ttf', 'woff', 'woff2'];

const fonts = ['TuskerGrotesk-8700Bold', 'IBMPlexMono-Medium', 'IBMPlexSans-Regular', 'IBMPlexMono-Regular'];

const generatedFonts = fonts.reduce(
  (acc, curFont) => [...acc, ...extensions.map((extension) => curFont.concat('.', extension))],
  []
);

function PreloadFonts() {
  return (
    <Head>
      {generatedFonts.map((font) => (
        <link key={font} rel="preload" href={`/fonts/${font}`} as="font" crossOrigin="anonymous" />
      ))}
    </Head>
  );
}

export default PreloadFonts;
