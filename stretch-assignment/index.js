const blocksParent = document.querySelector(".blocks");

const singleBlock = document.querySelectorAll(".block");

singleBlock.forEach(block => {
    block.addEventListener("click", () => {
        blocksParent.prepend(block);
    })
})

let moveRightInterval;
let movingBlock;

singleBlock.forEach(block => {
    block.addEventListener("mousedown", event => {
        let leftMargin = 10;
        movingBlock = block;
        moveRightInterval = setInterval(move, 1);
        function move() {
            if (leftMargin == 500) {
                clearInterval(moveRightInterval);
                movingBlock.style.marginLeft = "10px";
            } else {
                leftMargin++;
                movingBlock.style.marginLeft = leftMargin + "px";
            }
        }
    })
})

blocksParent.addEventListener("mouseup", event => {
    clearInterval(moveRightInterval);
    movingBlock.style.marginLeft = "10px";
})