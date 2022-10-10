import './style.css';

class toDo {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

function appendToDOM(newDo) {
    let tdContainer = document.createElement('div');
    tdContainer.classList.add('tdContainer');
    let tdTitle = document.createElement('h1');
    tdTitle.textContent = newDo.title;
    tdTitle.classList.add('tdTitle');
    tdContainer.appendChild(tdTitle);
    let tdDescription = document.createElement('p');
    tdDescription.textContent = newDo.description;
    tdDescription.classList.add('tdDescription');
    tdContainer.appendChild(tdDescription);
    let tdDD = document.createElement('p');
    tdDD.textContent = newDo.dueDate;
    tdDD.classList.add('tdDueDate');
    tdContainer.appendChild(tdDD);
    let tdPriority = document.createElement('p');
    tdPriority.textContent = newDo.priority;
    tdPriority.classList.add('tdPriority');
    tdContainer.appendChild(tdPriority);
    let trashButton = document.createElement('button');
    trashButton.classList.add('trash');
    trashButton.textContent = 'Click me when completed!';
    tdContainer.appendChild(trashButton);
    tdContainer.addEventListener('click', deleteToDo);
    document.querySelector('.tdList').appendChild(tdContainer);
}

function addNewToDo(){
    const form = document.createElement('form');
    const inTitle = document.createElement('input');
    inTitle.setAttribute('type', 'text');
    form.appendChild(inTitle);
    const inDescription = document.createElement('input');
    inDescription.setAttribute('type', 'text');
    form.appendChild(inDescription);
    const inDueDate = document.createElement('input');
    inDueDate.setAttribute('type', 'text'); //FIND CALENDAR OR DATE VALUE FOR THIS INPUT
    form.appendChild(inDueDate);
    const inPriority = document.createElement('input');
    inPriority.setAttribute('type', 'checkbox');
    form.appendChild(inPriority);
    const confirmBtn = document.createElement('input');
    confirmBtn.setAttribute('type', 'button');
    confirmBtn.setAttribute('value', 'Add To Do');
    confirmBtn.classList.add('confirmAdd');
    confirmBtn.addEventListener('click', (e)=>{
        if(e.target.classList.contains('confirmAdd')){
        appendToDOM(new toDo(inTitle.value, inDescription.value, inDueDate.value, inPriority.checked));
        while(document.querySelector('.formArea').firstChild){document.querySelector('.formArea').firstChild.remove();}
        }
    });
    form.appendChild(confirmBtn);
    document.querySelector('.formArea').appendChild(form);
}

function deleteToDo(event) {
    if(event.target.classList.contains('trash')){
        event.target.parentNode.remove();
        /*
        let trashBook = event.target.parentNode.firstChild.textContent;
        let trashIndex;
        for(const book of myLibrary){
            if(book.title == trashBook){
                trashIndex = book.index;
            }
        }
        myLibrary.splice(trashIndex, 1);
        createCard();
        */
    }
}

function initializeDOM(){
    let addButton = document.createElement('button');
    addButton.classList.add('newToDo');
    addButton.textContent = 'Add a new To Do';
    let formArea = document.createElement('div');
    formArea.classList.add('formArea');
    document.body.appendChild(formArea);
    document.body.appendChild(addButton);

    addButton.addEventListener('click', ()=>{
        if(!formArea.firstChild){addNewToDo();}
    })

    let todoList = document.createElement('div');
    todoList.classList.add('tdList');
    document.body.appendChild(todoList);
}

initializeDOM();
appendToDOM(new toDo('Example', 'This is an example ToDo item', '1/2/2023', 'Moderate'));
appendToDOM(new toDo('A longer example where the title should stretch at least into a second row but if I have typed enough it possibly goes to the third', 'This description is also meant to be long because I would like to verify just how the grid will change based on text that, frankly, shouldn\'t be this long in an To Do task. Maybe another method of keeping track of things would be better for you?', '9/28/2023', 'Ehh'));