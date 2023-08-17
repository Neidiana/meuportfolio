
const fixedHeader = document.querySelector('.fixed-header');
const content = document.querySelector('.content');
const headerHeight = fixedHeader.clientHeight;
content.style.marginTop = `${headerHeight}px`;