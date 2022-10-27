(function() {

const btnXS = document.querySelector('.toggle-xs');
const btnXL = document.querySelector('.toggle-xl');
const closeBtn = document.querySelector('.close-menu');
const sideBar = document.querySelector('#sidebar');
const modeBtn = document.querySelector('.theme-mode-btn');
const modeIcon = document.querySelector('.mode-icon');

btnXL.onclick = () => {
  sideBar.classList.toggle('hide');
}

btnXS.onclick = () => {
  sideBar.classList.toggle('hide-xs');
}

closeBtn.onclick = () => {
  sideBar.classList.add('hide-xs');
}

modeBtn.onclick = () => {
  if (modeIcon.innerHTML === "dark_mode") {
    modeIcon.innerHTML = "light_mode";
    document.querySelector('.mode-text').innerHTML = "Light Mode";
    document.querySelector('body').classList.add('dark');
  } else {
    modeIcon.innerHTML = "dark_mode";
    document.querySelector('.mode-text').innerHTML = "Dark Mode";
    document.querySelector('body').classList.remove('dark');
  }
}

})();
