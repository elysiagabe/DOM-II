// Your code goes here

// dblclick event 
const intro = document.querySelector(".intro"); 
const mainImg = document.querySelector(".intro img");
const headerText = document.querySelector (".intro h2");

intro.addEventListener('dblclick', event => {
    intro.style.backgroundColor = "#000";
    intro.style.color = "#fff";
})

mainImg.addEventListener('dblclick', event => {
    event.stopPropagation();
    mainImg.src = "img/fun-bus-alt.jpg";
    headerText.textContent = "Where will you go?";
})

// resize event
window.addEventListener("resize", event => {
    mainImg.style.transform = "rotate(180deg)";
    mainImg.style.transition = "transform .7s";
})

// mouseover event
const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
    link.addEventListener('mouseover', event => {
        link.style.color = "#17A2B8";
        link.style.textDecoration = "underline";
    })
})

// mouseout event 
links.forEach(link => {
    link.addEventListener('mouseout', event => {
        link.style.color = "initial";
        link.style.textDecoration = "initial";
    })
})

// mouseenter event
const destination = document.querySelector(".content-destination");
destination.style.padding = "16px";

const destinationImg = document.querySelector(".content-destination img");

destination.addEventListener('mouseenter', event => {
    destination.style.backgroundColor = "#17A2B8";
    destination.style.color = "white";
})

// mouseleave event 
const firstImg = document.querySelector(".img-content:first-child");

const secondImg = document.querySelector(".img-content:last-child");

firstImg.addEventListener('mouseleave', event => {
    firstImg.style.transform = "rotate(-10deg)";
})

secondImg.addEventListener('mouseleave', event => {
    secondImg.style.transform = "rotate(10deg)";
})

//scroll event
const allH2 = document.querySelectorAll("h2")

window.addEventListener("scroll", event => {
    allH2.forEach(h2 => {
        h2.style.fontSize = "5rem";
        h2.style.color = "hotpink";
    })
})


// contextmenu event

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("contextmenu", event => {
        event.preventDefault();
        alert("HEY THERE");
    })
})

// click event






