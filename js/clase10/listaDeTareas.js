console.log('Lista de Tareas');

let tasks = []
const addButton = document.getElementById('add')
const titleInput = document.getElementById('title')
const effortInput = document.getElementById('effort')
const tasksDiv = document.getElementById('tasks')

function addTask( title, effort ) {
    tasks.push( {title, effort} )
    // console.log(tasks);
    printTasks()
    syncStorage()
}

function printTasks() {
    tasksDiv.innerHTML = ''
    tasks.forEach( t => {
        const li = document.createElement('li')
        li.innerText = `${t.title} - ${t.effort}`
        tasksDiv.append( li )
    })
}

function syncStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks) )
}

function readStorage() {
    const tasksJson = localStorage.getItem('tasks')
    const tasksFromLocalStorage = JSON.parse(tasksJson)
    tasks = tasks.concat( tasksFromLocalStorage )
    printTasks()
}

addButton.addEventListener('click', function() {
    addTask(titleInput.value, effortInput.value)
})

readStorage()