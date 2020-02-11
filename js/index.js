// Your code goes here

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

// dblclick event 
const mainImg = document.querySelector(".intro img");
const headerText = document.querySelector (".intro h2");

mainImg.addEventListener('dblclick', event => {
    mainImg.src = "img/fun-bus-alt.jpg";
    headerText.textContent = "Where will you go?";
})
