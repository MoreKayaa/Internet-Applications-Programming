let submit = document.getElementById('submit');
let newTask = document.getElementById('task');

submit.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form submission

    // Check if task field is empty
    if(newTask.value === '') {
        alert('Task cannot be empty');
        return;
    }

    // Create new list item and append it to the tasks list
    let li = document.createElement('li');
    li.textContent = newTask.value;
    document.getElementById('tasks').appendChild(li);

    // Clear the task field
    newTask.value = '';
});