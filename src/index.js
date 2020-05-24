if (module.hot) {
    module.hot.accept()
}

import './index.scss';

const r = document.getElementById('logoR');

window.addEventListener('scroll', () => {
  r.style.transform = "rotate("+ window.pageYOffset  + "deg)";
  r.style.transition = "transform .3s";
});