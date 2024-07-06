export function scrollToSection() {
  const anchors = document.querySelectorAll('.js-section-link')

  anchors.forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  })
}