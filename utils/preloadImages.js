/* eslint-disable no-param-reassign */
const selector = '.preload';

export const preloadImages = async () => {
  const images = document.querySelectorAll(selector);
  const promises = [...images].map((img) => {
    return new Promise((resolve) => {
      const src = img.getAttribute('src');
      const image = new Image();
      image.onload = resolve;
      image.onerror = resolve;
      image.src = src;
    });
  });

  await Promise.all(promises);
};
