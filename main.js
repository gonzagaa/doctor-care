window.addEventListener("scroll", function(){
  let nav = this.document.querySelector('nav')
  nav.classList.toggle('rolagem', window.scrollY > 0)
})
