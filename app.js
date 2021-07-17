// selectors
const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');
const newBtn = document.querySelector('.new-btn');
const taskInput = document.querySelector('#taskInput');
const taskCol = document.querySelector('.task-column');

newBtn.addEventListener('click', addTask)

function addTask() {
    if(taskInput.value === '') {
        alert('add a task');
    } else {
        const div = document.createElement('div');
        div.className = 'draggable';
        div.setAttribute('draggable', true);

        const h3 = document.createElement('h3');
        h3.appendChild(document.createTextNode(taskInput.value));

        const progressBar = document.createElement('div');
        progressBar.className = 'progress';

        div.appendChild(h3);
        div.appendChild(progressBar);

        taskCol.appendChild(div);
    }
}

// draggables.forEach(draggable => {
//     // Event Listner
//     draggable.addEventListener('dragstart', () => {
//         draggable.classList.add('hold');
//         setTimeout(() => {
//             draggable.classList.toggle('invisible')
//         }, 0);
//     });
//     draggable.addEventListener('dragend', () => {
//         draggable.className = 'draggable';
//     });  
// })

containers.forEach(container => {
    container.addEventListener('dragover', (e) => {
        e.preventDefault();
        const hold = document.querySelector('.hold');
        container.appendChild(hold);
    })
})