const getRandomPosition = () => {
    const wh = window.innerHeight * Math.random();
    const ww = window.innerWidth * Math.random();
    const whInt = parseInt(wh);
    const wwInt = parseInt(ww);
    console.log({top: `${whInt}px`, left: `${wwInt}px`});
    return {top: `${whInt}px`, left: `${wwInt}px`};
}

const createBubble = () => {
    //alert ("criou o bubble");
    const bubble = document.createElement("div");
    const position = getRandomPosition();
    bubble.style["top"] = position.top;
    bubble.style["left"] = position.left;
    bubble.classList.add("bubble");
    bubble.id = new Date();
    return bubble;
}
const addBubble = () => {
    const bubble = createBubble();
    const container = document.getElementById("container");
    container.appendChild(bubble);
}

const removeBubble = () => {
    const bubble = document.getElementById("container");
    bubble.removeChild(bubble.lastChild);
}

const removeAllBubble = () => {
    const bubble = document.getElementById("container");
    while (bubble.firstChild) {
        bubble.removeChild(bubble.lastChild);
    }
}



