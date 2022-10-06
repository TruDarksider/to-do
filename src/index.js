console.log('I have linked correctly');

class toDo {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

function appendToDOM(newDo) {
let tdTitle = document.createElement('h1');
tdTitle.textContent = newDo.title;
let tdDescription = document.createElement('p');
tdDescription.textContent = newDo.description;
tdTitle.appendChild(tdDescription);
let tdDD = document.createElement('p');
tdDD.textContent = newDo.dueDate;
tdTitle.appendChild(tdDD);
let tdPriority = document.createElement('p');
tdPriority.textContent = newDo.priority;
tdTitle.appendChild(tdPriority);
document.body.appendChild(tdTitle);
}

appendToDOM(new toDo('Example', 'This is an example ToDo item', '1/2/2023', 'Moderate'));