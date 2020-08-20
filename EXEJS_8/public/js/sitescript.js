const main = document.querySelector('#main');
const imgs = document.querySelectorAll('.imgs img');

imgs.forEach(img =>img.addEventListener('click', e => (main.src = e.target.src)));