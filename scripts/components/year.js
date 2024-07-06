export function setYearInFooter() {
  const yearContainer = document.querySelector('.js-year')
  const year = new Date().getFullYear()
  yearContainer.textContent = year
}