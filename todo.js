var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var toDos = JSON.parse(localStorage.getItem('toDo_List')) || [];

function renderToDos() {
    listElement.innerHTML = '';
    for(toDo of toDos) {
        var toDoElement = document.createElement('li');
        var toDoText = document.createTextNode(toDo);
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');
        var position = toDos.indexOf(toDo);

        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', 'deleteToDo(' + position + ')');

        linkElement.appendChild(linkText);
        toDoElement.appendChild(toDoText);
        toDoElement.appendChild(linkElement);
        listElement.appendChild(toDoElement);
    }
}

function addToDo(){
    var toDoText = inputElement.value;
    toDos.push(toDoText);
    inputElement.value = '';
    renderToDos();
    saveToStorage();
}

function deleteToDo(position) {
    toDos.splice(position, 1);
    renderToDos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('toDo_List', JSON.stringify(toDos));
}

renderToDos();

buttonElement.onclick = addToDo;