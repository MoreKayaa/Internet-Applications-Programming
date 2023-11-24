// add an event listener to the newTask input field to check if the task field is empty whenever the user types into the input field. If it is, the submit button is disabled. If it is not, the submit button is enabled
newTask.addEventListener('input', function() {
    // Enable submit button if task field is not empty
    submit.disabled = (newTask.value === '');
});