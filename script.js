const toggle = document.getElementById('toggle1');
const blur_elements = document.querySelectorAll('.blur'); // Select all elements with class "blur"

toggle.addEventListener('change', () => {
  blur_elements.forEach(element => {
    if (toggle.checked) {
      element.style.filter = 'blur(5px) brightness(50%)';
    } else {
      element.style.filter = 'none';
    }
  });
});
