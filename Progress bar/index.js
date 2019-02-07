let progress = 4;
 
document.addEventListener('DOMContentLoaded', () => {
  let btnPlus = document.querySelector('#plus');
  btnPlus.addEventListener('click', () => {
    if(progress < 10) { 
      progress++;
    }
    document.querySelector('#counter').innerHTML = progress;
    document.querySelector('#knob').style.width = `${progress*10}%`;
  });
 
  let btnMinus = document.querySelector('#minus');
  btnMinus.addEventListener('click', () => {
    if(progress > 0) {
      progress--;
    }
    document.querySelector('#counter').innerHTML = progress;
    document.querySelector('#knob').style.width = `${progress*10}%`;
  });
});


/*  DRY 

let progress = 4; 
 
const updateHTML = () => {
  document.querySelector('#counter').innerHTML = progress;
  document.querySelector('#knob').style.width = `${progress*10}%`;
}
 
document.addEventListener('DOMContentLoaded', () => {
  let btnPlus = document.querySelector('#plus');
  btnPlus.addEventListener('click', () => {
    if(progress < 10) { 
      progress++;
    }
    updateHTML();  
  });
 
  let btnMinus = document.querySelector('#minus');
  btnMinus.addEventListener('click', () => {
    if(progress > 0) {
      progress--;
    }
    updateHTML();
  });
});



--------------------------------

after class

const progress = new ProgressBar(12, 40);

document.addEventListener('DOMContentLoaded', () => {
  const plusBtn = document.querySelector('#plus');
  plusBtn.addEventListener('click', () => {
    progress.increment();
  });
  
  const minusBtn = document.querySelector('#minus');
  minusBtn.addEventListener('click', () => {
    progress.decrement();
  });
  
  progress.update();
});
*/

