const todoTask = document.getElementById('task');
const addBtn = document.getElementById('add-btn');
const showList = document.getElementById('todo-list');
addBtn.addEventListener('click',() => {
    const task = todoTask.value;
        const listItem = document.createElement('li');
        listItem.innerHTML = task;
        showList.append(listItem);
        todoTask.value="";
});