function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Update active sidebar link
    const sidebarLinks = document.querySelectorAll('.sidebar ul li');
    sidebarLinks.forEach(link => link.classList.remove('active'));

    const activeLink = Array.from(sidebarLinks).find(link => link.textContent.trim().toLowerCase() === sectionId);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Show the 'about' section by default on page load
window.addEventListener('DOMContentLoaded', () => {
    showSection('about');
});


function openProject(projectUrl) {
    window.open(projectUrl, '_blank'); // Opens in a new tab
}