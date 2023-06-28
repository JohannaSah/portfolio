
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
};

// Show/hide hidden elements in About me and Projects
const projectElements = document.querySelectorAll('.project');

projectElements.forEach((project) => {
  const seenElement = project.querySelector('.seen');
  const hiddenElement = project.querySelector('.hidden');
  const seeMoreIcon = seenElement.querySelector('.see-more-icon');
  
  seenElement.addEventListener('click', () => {
    hiddenElement.classList.toggle('show');
    seeMoreIcon.style.display = hiddenElement.classList.contains('show') ? 'none' : 'block';
    
    if (hiddenElement.classList.contains('show')) {
      hiddenElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
  
  document.addEventListener('click', (event) => {
    if (!project.contains(event.target)) {
      hiddenElement.classList.remove('show');
      seeMoreIcon.style.display = 'block';
    }
  });
});