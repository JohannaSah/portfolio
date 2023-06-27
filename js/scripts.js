
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

// Show hidden Paragraphs in About me
const seenParagraphs = document.querySelectorAll('#skills .seen');

seenParagraphs.forEach((paragraph) => {
  paragraph.addEventListener('click', () => {
    paragraph.nextElementSibling.classList.toggle('show');
  });
});