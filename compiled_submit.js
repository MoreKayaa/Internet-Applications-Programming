let submit = document.getElementById('submit');
let newTask = document.getElementById('task');

submit.disabled = true; // Disable submit button by default

newTask.addEventListener('input', function() {
    // Enable submit button if task field is not empty
    submit.disabled = (newTask.value === '');
});

// Add click event listener for submit button
submit.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form submission

    // Create new list item and append it to the tasks list
    let li = document.createElement('li');
    li.textContent = newTask.value;
    document.getElementById('tasks').appendChild(li);

    // Clear the task field
    newTask.value = '';

    // Disable submit button again
    submit.disabled = true;
});