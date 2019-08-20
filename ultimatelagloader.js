//this is a loader with the infinite lag function, causes lags and will eventually frezes the browser, I made this for fun only
const lagLoader = document.querySelector('.loader');
const mainSection = document.querySelector('.main');

function load() {
  setTimeout(() => {
    lagLoader.style.opacity = 0;
    lagLoader.style.display = 'none';

    mainSection.style.display = 'block';
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 4000);
}

load();


const countdown = setInterval(myTimer, 1000);

function myTimer() {
  for (let i=10; i > 0; i-=1) {
  console.log(i);
  myTimer()
  continue
  break
}
}
