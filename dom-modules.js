export function appendText(parent,child,input) {
    const childNode = document.createElement(child);
    childNode.innerText = input;
    parent.appendChild(childNode);
}

