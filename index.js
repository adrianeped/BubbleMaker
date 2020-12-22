const createBubble = () => {
    //alert ("criou o bubble");
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.id = new Date();
    return bubble;
}
const addBubble = () => {
    const bubble = createBubble();
    const container = document.getElementById("container");
    container.appendChild(bubble);
}


