const toggle = document.getElementById('toggle1');
const hero = document.querySelector('.hero');

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    hero.style.filter = 'blur(5px) brightness(50%)';
  } else {
    hero.style.filter = 'none';
  }
});
