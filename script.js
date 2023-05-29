const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

left.addEventListener('mouseenter', () => {
  container.classList.add('hover-left')
  left.style.setProperty('--left-bg-color', 'transparent')
  console.log('mouse entered')
})
left.addEventListener('mouseleave', () => {
  container.classList.remove('hover-left')
  left.style.setProperty('--left-bg-color', 'rgba(87, 84, 236, 0.7)')
  console.log('mouse leave')
})

right.addEventListener('mouseenter', () => {
  container.classList.add('hover-right')
  right.style.setProperty('--right-bg-color', 'transparent')
})
right.addEventListener('mouseleave', () => {
  container.classList.remove('hover-right')
  right.style.setProperty('--right-bg-color', 'rgba(42, 43, 43, 0.8)')
})
