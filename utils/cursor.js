import gsap from 'gsap';

const cursorTextSelector = '.ls-cursor__text';
const cursorTextRightSelector = '.ls-cursor__text-right';
const cursorBgSelector = '.ls-cursor__bg';

let cursor = null;
let cursorText = null;
let cursorTextRight = null;
let cursorBg = null;
if (process.browser) {
  cursor = document.getElementById('ls-cursor');
  cursorText = cursor.querySelector(cursorTextSelector);
  cursorTextRight = cursor.querySelector(cursorTextRightSelector);
  cursorBg = cursor.querySelector(cursorBgSelector);
}

export const setCursorBgColor = (color) => {
  cursorBg.style.backgroundColor = color;
  cursorBg.style.borderColor = 'transparent';
};

export const setCursorTextRight = ({ color, text }) => {
  cursorTextRight.style.color = color;
  cursorTextRight.innerHTML = text;
  cursor.classList.add('ls-cursor--is-text-right');
};

export const setCursorText = ({ color, text }) => {
  cursorText.style.color = color;
  cursorText.innerHTML = text;
  cursor.classList.add('ls-cursor--is-text');
};

export const setCursorBlendMode = () => {
  cursor.classList.add('ls-cursor--active');
  cursor.classList.add('ls-cursor--is-blend-mode');
};

export const setCursorLink = () => {
  cursor.classList.add('ls-cursor--active');
  cursor.classList.add('ls-cursor--is-link');
};

export const setCursorActive = () => {
  cursor.classList.add('ls-cursor--active');
};

export const setCursorArrow = () => {
  cursor.classList.add('ls-cursor--active');
  cursor.classList.add('ls-cursor--is-arrow');
};

export const resetCursor = () => {
  cursorBg.style.backgroundColor = '#dff1f0';
  cursorBg.style.borderColor = '#a2c7ca';
  cursor.classList.remove('ls-cursor--active');
  cursor.classList.remove('ls-cursor--is-arrow');
  cursor.classList.remove('ls-cursor--is-link');
  cursor.classList.remove('ls-cursor--is-text');
  cursor.classList.remove('ls-cursor--is-blend-mode');
  cursor.classList.remove('ls-cursor--is-hidden');
  cursor.classList.remove('ls-cursor--is-text-right');
};

export const hideCursor = () => {
  cursor.classList.add('ls-cursor--is-hidden');
};

export const resetCursorPosition = () => {
  gsap.to(cursor, { x: 0, y: 0, duration: 0.3 });
};

export const initCursor = () => {
  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
      x: e.clientX - cursor.clientWidth / 2,
      y: e.clientY - cursor.clientHeight / 2,
      duration: 0.4
    });
  });
};
