

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

// expanding Projects when clicking on them, minimizing them, when clicked outside
let expandedProject = null;

function expandProject(project) {
  if (expandedProject) {
    expandedProject.classList.remove('expanded');
  }

  if (expandedProject !== project) {
    project.classList.add('expanded');
    expandedProject = project;
  } else {
    expandedProject = null;
  }
}

document.addEventListener('click', function(event) {
  const clickedElement = event.target;
  const isClickedProject = clickedElement.closest('.project');

  if (!isClickedProject && expandedProject) {
    expandedProject.classList.remove('expanded');
    expandedProject = null;
  }
});

 
  
  
  
  
  