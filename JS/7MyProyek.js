let projectDetails = JSON.parse(localStorage.getItem('newProject'));

// Populate the placeholders with actual project data
if (projectDetails) {
    document.getElementById('buildingType').textContent = ": " + projectDetails.buildingType;
    document.getElementById('style').textContent = ": " + projectDetails.style;
    document.getElementById('budget').textContent = ": Rp " + projectDetails.budget;
    document.getElementById('time').textContent = ": " + projectDetails.time + " Hari";
    document.getElementById('designer').textContent = projectDetails.designer;
}