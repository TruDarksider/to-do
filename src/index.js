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
let trashButton = document.createElement('button');
trashButton.classList.add('trash');
trashButton.textContent = 'Delete';
tdTitle.appendChild(trashButton);
tdTitle.addEventListener('click', deleteToDo);
document.body.appendChild(tdTitle);
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
}

initializeDOM();
appendToDOM(new toDo('Example', 'This is an example ToDo item', '1/2/2023', 'Moderate'));