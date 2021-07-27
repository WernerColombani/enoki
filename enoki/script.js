
let nextDiapo = () => {
  for(let i = 0 ; i < diapo.length ; i++) {
    if(diapo[i].className === 'column onglet_diapo visible') {
      if(i !== diapo.length - 1) {
        diapo[i].classList.remove('visible');
        i++;
        diapo[i].classList.add('visible');
      } else {
        diapo[i].classList.remove('visible');
        diapo[0].classList.add('visible');
      }
    }
  }
}
let previousDiapo = () => {
  for(let x = diapo.length - 1 ; x >= 0 ; x--) {
    if(diapo[x].className === 'column onglet_diapo visible') {
      if(x !== 0) {
        diapo[x].classList.remove('visible');
        x--;
        diapo[x].classList.add('visible');
      } else {
        diapo[x].classList.remove('visible');
        diapo[3].classList.add('visible');
      }
    }
  }
}

const diapo = document.querySelectorAll('.onglet_diapo');
const arrowRight = document.querySelector('.arrow_right');
const arrowLeft = document.querySelector('.arrow_left');
arrowRight.addEventListener('click', nextDiapo);
arrowLeft.addEventListener('click', previousDiapo);