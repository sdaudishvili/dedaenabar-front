export const splitTextOnWords = (node) => {
  return node.textContent
    .split(/\s/)
    .map((word) => `<span class="word inline-block">${word}</span>`)
    .join(' ');
};

export const splitTextOnLines = (selector, withUnderline) => {
  const node = typeof selector === 'string' ? document.querySelector(selector) : selector;
  if (!node.classList.contains('splitted')) {
    node.innerHTML = splitTextOnWords(node);

    const words = node.querySelectorAll('.word');

    const lines = [];
    let lastOffset = 0;
    let line = [];

    [...words].forEach((element) => {
      if (element.offsetTop !== lastOffset) {
        lines.push(line);
        line = [];
        lastOffset = element.offsetTop;
      }
      line.push(element.textContent);
    });

    lines.push(line);
    const inner = lines
      .filter((x) => x.length > 0)
      .map(
        (line) =>
          `<div class="line relative float-left clear-left">
            <div class="line__text">${line.join(' ')}</div>
            ${withUnderline ? '<span class="absolute left-0 w-full h-0-1 bg-current bottom-0"></span>' : ''}
          </div>`
      )
      .join(' ');

    node.innerHTML = `<div class="clearfix">${inner}</div>`;
    node.classList.add('splitted');
  }

  return node.querySelectorAll('.line');
};
