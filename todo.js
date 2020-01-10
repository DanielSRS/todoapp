var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var toDos = [
    'Tarefa 1',
    'Tarefa 2',
    'Tarefa 3'
];

function renderToDos() {
    listElement.innerHTML = '';
    for(toDo of toDos) {
        var toDoElement = document.createElement('li');
        var toDoText = document.createTextNode(toDo);

        toDoElement.appendChild(toDoText);
        listElement.appendChild(toDoElement);
    }
}

function addToDo(){
    var toDoText = inputElement.value;
    toDos.push(toDoText);
    inputElement.value = '';
    renderToDos();
}

renderToDos();

buttonElement.onclick = addToDo;