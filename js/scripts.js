
// Changing languages by clicking button
function showLanguage(language) {
    // Get all the language choices
    const languageChoices = document.getElementsByClassName('language-choice');
  
    // Hide all the language choices
    for (let i = 0; i < languageChoices.length; i++) {
      languageChoices[i].classList.remove('active');
    }
  
    // Show the sections corresponding to the selected language
    const selectedChoices = document.querySelectorAll(`.language-choice.${language}`);
    if (selectedChoices) {
      selectedChoices.forEach(choice => {
        choice.classList.add('active');
      });
    }
}

// Expand project text
const projects = document.querySelectorAll('.project-text');

// Add click event listener to each project
projects.forEach(project => {
  const moreLink = project.querySelector('.more-link');

  // Show/hide additional text on click
  moreLink.addEventListener('click', () => {
    project.classList.toggle('expanded');
  });
});
