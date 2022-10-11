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

function addNewList(){
    const form = document.createElement('form');
    form.setAttribute('id', 'newList');
    const inTitle = document.createElement('input');
    inTitle.setAttribute('type', 'text');
    form.appendChild(inTitle);
    const confirmBtn = document.createElement('input');
    confirmBtn.setAttribute('type', 'button');
    confirmBtn.setAttribute('value', 'Add New List');
    confirmBtn.classList.add('confirmAdd');
    confirmBtn.addEventListener('click', (e)=>{
        if(e.target.classList.contains('confirmAdd')){
            let newList = document.createElement('div');
            newList.classList.add('listTab');
            newList.textContent = inTitle.value;
            document.querySelector('.listArea').insertBefore(newList,document.querySelector('.addNewList'));
            theseTD = [];
            listOfLists.push(theseTD);
            updateDOM();
            form.remove();
        }
    });
    form.appendChild(confirmBtn);
    document.querySelector('.listArea').appendChild(form);
}

function addNewToDo(){
    const form = document.createElement('form');
    form.setAttribute('id', 'newToDo');
    const inTitle = document.createElement('input');
    inTitle.setAttribute('type', 'text');
    form.appendChild(inTitle);
    const inDescription = document.createElement('input');
    inDescription.setAttribute('type', 'text');
    form.appendChild(inDescription);
    const inDueDate = document.createElement('input');
    inDueDate.setAttribute('type', 'text');
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
        theseTD.push(new toDo(inTitle.value, inDescription.value, inDueDate.value, inPriority.checked));
        updateDOM();
        form.remove();
        }
    });
    form.appendChild(confirmBtn);
    document.querySelector('.formArea').appendChild(form);
}

function deleteToDo(event) {
    if(event.target.classList.contains('trash')){
        let trashTD = event.target.parentNode.firstChild.textContent;
        let trashIndex;
        for(const td of theseTD){
            if(td.title == trashTD){
                trashIndex = theseTD.indexOf(td);
            }
        }
        theseTD.splice(trashIndex, 1);
        updateDOM();
    }
}

function initializeDOM(){
    setupNewListBtn();
    setupNewTdBtn();
}

function setupNewListBtn(){
    let addButton = document.createElement('button');
    addButton.classList.add('addNewList');
    addButton.textContent = 'Add a new List of To Dos';
    let listArea = document.createElement('div');
    listArea.classList.add('listArea');
    let thisList = document.createElement('div');
    thisList.classList.add('listTab');
    thisList.textContent = 'My Example List';
    listArea.appendChild(thisList);
    listArea.appendChild(addButton);
    document.body.appendChild(listArea);

    addButton.addEventListener('click', ()=>{
        if(!document.querySelector('#newList')){addNewList();}
    })
    listArea.addEventListener('click', (e)=>{
        if(e.target.classList.contains('listTab')){
            theseTD = listOfLists[listOfLists.indexOf.call(document.querySelectorAll('.listTab'), e.target)];
            updateDOM();
        }
    });

}

function setupNewTdBtn(){
    let addButton = document.createElement('button');
    addButton.classList.add('newToDo');
    addButton.textContent = 'Add a new To Do';
    let formArea = document.createElement('div');
    formArea.classList.add('formArea');
    formArea.appendChild(addButton);
    document.body.appendChild(formArea);

    addButton.addEventListener('click', ()=>{
        if(!document.querySelector('#newToDo')){addNewToDo();}
    })

    let todoList = document.createElement('div');
    todoList.classList.add('tdList');
    document.body.appendChild(todoList);
}

function updateDOM(){
    let tdList = document.querySelector('.tdList');
    while(tdList.firstChild){tdList.firstChild.remove();}
    for(const td of theseTD){appendToDOM(td)}; 
}

let listOfLists = [];
let theseTD = [];
theseTD.push(new toDo('Example', 'This is an example ToDo item', '1/2/2023', 'Moderate'))
theseTD.push(new toDo('A longer example where the title should stretch at least into a second row but if I have typed enough it possibly goes to the third', 'This description is also meant to be long because I would like to verify just how the grid will change based on text that, frankly, shouldn\'t be this long in an To Do task. Maybe another method of keeping track of things would be better for you?', '9/28/2023', 'Ehh'));
listOfLists.push(theseTD);
initializeDOM();
updateDOM();

/* THINGS THAT CAN MAKE THIS BETTER:
-Make date field be a calendar input
-Make it look pretty, especially form readability and knowing what goes in each field
-Organize To Dos by priority and/or date
-Modularize the setup functions (lots of copied code inside)
*/