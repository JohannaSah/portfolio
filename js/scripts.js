
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
const seenElements = document.querySelectorAll('.seen');

seenElements.forEach((element) => {
  element.addEventListener('click', () => {
    element.nextElementSibling.classList.toggle('show');

    
    const hiddenElement = element.nextElementSibling;
    if (hiddenElement.classList.contains('show')) {
        hiddenElement.scrollIntoView({ behavior: 'smooth' });
      }
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