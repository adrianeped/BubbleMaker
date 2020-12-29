const getRandomPosition = () => {
    const wh = window.innerHeight * Math.random();
    const ww = window.innerWidth * Math.random();
    const whInt = parseInt(wh);
    const wwInt = parseInt(ww);
    console.log({top: `${whInt}px`, left: `${wwInt}px`});
    return {top: `${whInt}px`, left: `${wwInt}px`};
}

const createBubble = () => {
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
    const warningMessage = document.getElementById("warning-message");

    if (warningMessage){
        container.removeChild(warningMessage);
    }
    container.appendChild(bubble);
}

const createWarningMessage = (message) => {
    const warningMessage = document.createElement("spam");
    warningMessage.innerText = message;
    warningMessage.className = "warning-message";
    warningMessage.id = "warning-message";
    return warningMessage;
}

const removeBubble = () => {
    const container = document.getElementById("container");

    if (container.firstChild){
        container.removeChild(container.lastChild);
    } else{
        const warningMessage = createWarningMessage("There is no bubbles to remove!");
        container.appendChild(warningMessage);
    }
}

const removeAllBubble = () => {
    const container = document.getElementById("container");
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}



