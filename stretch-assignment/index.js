const blocksParent = document.querySelector(".blocks");

const singleBlock = document.querySelectorAll(".block");

singleBlock.forEach(block => {
    block.addEventListener("click", () => {
        blocksParent.prepend(block);
    })
})

let isMoving = false;

singleBlock.forEach(block => {
    block.addEventListener("mousedown", event => {
        block.style.backgroundColor = "orange";
    
    })
})
