// small screen dropdown menu move to section
function navigateToSection(targetSectionId) {
  const targetSection = document.querySelector(targetSectionId);
  if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
  }
}

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

// Show/hide hidden elements in Skills
const seenElements = document.querySelectorAll('#skills .seen');

seenElements.forEach((element) => {
  element.addEventListener('click', () => {
    element.nextElementSibling.classList.toggle('show');
  });
});

document.addEventListener('click', (event) => {
    seenElements.forEach((element) => {
      const hiddenElement = element.nextElementSibling;
      if (!element.contains(event.target) && !hiddenElement.contains(event.target)) {
        hiddenElement.classList.remove('show');
      }
    });
});

// Show/hide hidden elements in Projects
const projectElements = document.querySelectorAll('.project');

projectElements.forEach((project) => {
  const seenElement = project.querySelector('#projects .seen');
  const hiddenElement = project.querySelector('#projects .hidden');
  
  seenElement.addEventListener('click', () => {
    hiddenElement.classList.toggle('show');
    
    if (hiddenElement.classList.contains('show')) {
      hiddenElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
  
  document.addEventListener('click', (event) => {
    if (!project.contains(event.target)) {
      hiddenElement.classList.remove('show');
    }
  });
});