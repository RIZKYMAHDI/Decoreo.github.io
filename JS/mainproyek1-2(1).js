document.getElementById('newProjectForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    let buildingType = document.getElementById('building-type').value;
    let style = document.getElementById('style').value;
    let budget = document.getElementById('budget').value;
    let time = document.getElementById('time').value;
    let designer = document.getElementById('designer').value;

    // Save project details to localStorage
    let projectDetails = {
        buildingType: buildingType,
        style: style,
        budget: budget,
        time: time,
        designer: designer
    };
    localStorage.setItem('newProject', JSON.stringify(projectDetails));

    // Redirect to the project page
    window.location.href = '7MyProyek.html';
});
