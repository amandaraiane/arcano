document.addEventListener('DOMContentLoaded', function(){
    function onScroll() {
        console.log(função)
      showNavOnScroll()
      showBackToTopButtonOnScroll()
    
      activateMenuAtCurrentSection(home)
      activateMenuAtCurrentSection(services)
      activateMenuAtCurrentSection(about)
      activateMenuAtCurrentSection(contact)
    }
    document.addEventListener('scroll', onScroll)
})


function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  // quais dados vou precisar?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // verificar se a base está abaixo da linha alvo

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  // limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function setLetter() {
    const letter = document.getElementsByClassName('hidden')
    console.log(letter)
}

function rolouPagina() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
        } else {
        navigation.classList.remove('scroll')
    }
    console.log(scrollY)
}

rolouPagina()
setLetter()

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card
  #about, 
  #about header, 
  #about .content`)