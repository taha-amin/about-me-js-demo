// import functions

// grab DOM elements

// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state

const showButton = document.getElementById('btn');
const animal = document.getElementById('animalDiv');


showButton.addEventListener('click', () => {
    animal.classList.remove('hidden');
});