const desktopBreakpoints = [
  '1920px',
  '1800px',
  '1680px',
  '1600px',
  '1560px',
  '1500px',
  '1440px',
  '1366px',
  '1280px',
  '1200px',
  '1120px'
];

const tabletBreakPoints = ['1024px', '992px', '820px', '768px'];

const mobileBreakpoints = ['750px', '640px', '600px', '540px', '505px', '480px', '415px', '375px', '360px', '320px'];

const ratio = {
  desktop: 192,
  tablet: 128,
  mobile: 75
};

const getFontSizeVal = (width, ratio) => `${+width.slice(0, -2) / ratio}px`;

const getOptions = (screenWidth, ratio) => ({
  screenWidth,
  fontSize: getFontSizeVal(screenWidth, ratio)
});

const desktopScreens = desktopBreakpoints.map((width) => getOptions(width, ratio.desktop));
const tabletScreens = tabletBreakPoints.map((width) => getOptions(width, ratio.tablet));
const mobileScreens = mobileBreakpoints.map((width) => getOptions(width, ratio.mobile));

const mediaqueries = [...desktopScreens, ...tabletScreens, ...mobileScreens].map((x) => ({
  [`@media (max-width: ${x.screenWidth})`]: {
    html: {
      fontSize: x.fontSize
    }
  }
}));

const defaultHtml = {
  html: {
    fontSize: '10px'
  }
};

const container = {
  '.container': {
    width: '81%',
    margin: '0 auto',
    '@media (max-width: 1024px)': {
      padding: '0 5rem',
      width: 'auto'
    },
    '@media (max-width: 750px)': {
      padding: '0 4rem',
      width: 'auto'
    }
  }
};

module.exports = [container, defaultHtml, ...mediaqueries];
