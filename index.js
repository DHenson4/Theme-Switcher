
const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const mintButton = document.getElementById('mint');
const body = document.body;




const theme = localStorage.getItem('theme');



// Button Event Handlers

lightButton.onclick = () => {
  body.classList.remove('dark', 'mint');
  body.classList.add('light');
  localStorage.setItem('theme', 'light');
};

darkButton.onclick = () => {
  body.classList.remove('light', 'mint');
  body.classList.add('dark');
  localStorage.setItem('theme', 'dark');
};

mintButton.onclick = () => {
    body.classList.remove('dark', 'light');
    body.classList.add('mint');
    localStorage.setItem('theme', 'mint');
  };
 