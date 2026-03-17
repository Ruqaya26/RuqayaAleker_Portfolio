/* smooth scroll */

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault()

const target = document.querySelector(this.getAttribute("href"))

target.scrollIntoView({
behavior:"smooth"
})

})

})



/* reveal animation when section appears */

const reveals = document.querySelectorAll(".reveal")

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("active")
}

})

},{
threshold:0.2
})

reveals.forEach(section => {
observer.observe(section)
})
