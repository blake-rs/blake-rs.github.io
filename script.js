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

document.querySelectorAll('.link1').forEach(element => {
  element.addEventListener('click', () => {
    toggle.checked = !toggle.checked;
    toggle.dispatchEvent(new Event('change'));
  });
});




function checkScreenWidthAndClearBlur() {
  if (window.innerWidth > 575) {
    toggle.checked = false;
    toggle.dispatchEvent(new Event('change'));
  }
}

// Run on page load
checkScreenWidthAndClearBlur();

// Run when the window is resized
window.addEventListener('resize', checkScreenWidthAndClearBlur);
