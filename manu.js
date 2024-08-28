
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 500)
    let hr = document.querySelector('#hr')
    hr.classList.toggle('rolagem', window.scrollY > 500)
})