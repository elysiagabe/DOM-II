// Your code goes here

// dblclick event 
const mainImg = document.querySelector(".intro img");
const headerText = document.querySelector (".intro h2");

mainImg.addEventListener('dblclick', event => {
    mainImg.src = "img/fun-bus-alt.jpg";
    headerText.textContent = "Where will you go?";
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
        link.style.color = "#212529";
        link.style.textDecoration = "none";
    })
})

// mouseenter event
const destination = document.querySelector(".content-destination");
destination.style.padding = "16px";

destination.addEventListener('mouseenter', event => {
    destination.style.backgroundColor = "#17A2B8";
    destination.style.color = "white";
})

// mouseleave event 
destination.addEventListener('mouseleave', event => {
    destination.style.backgroundColor = "white";
    destination.style.color = "#212529";
})


