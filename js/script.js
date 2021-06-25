let input = document.querySelector('input');
let button = document.querySelector('button');
let taskList = document.getElementById('tasks')

button.addEventListener('click', function(){
    let li = document.createElement('li')
    li.innerHTML = input.value
    input.value = '';

    taskList.prepend(li)
})