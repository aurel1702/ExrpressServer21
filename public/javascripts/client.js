window.onload = () => {
    fetch('./todos')
        .then(response => response.json())
        .then(data => {
        const todos = data;
        const todosDiv = document.querySelector("#todos");
        for (let i = 0; i < todos.length; i++) {
            todosDiv.innerHTML += ` <p id=${i}>Todo: ${todos[i].name} - ${todos[i].description}</p>`;
        }
    });
};
export {};
