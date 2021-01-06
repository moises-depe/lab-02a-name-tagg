
// this is the equivalent of going and grabbing them in the browser
const mySpecialButton = document.getElementById('my-special-button');
const theSection = document.getElementById('my-special-section');
const theInput = document.getElementById('my-special-input');

mySpecialButton.addEventListener('click', () => {

    // whatever code i put in the cool zone will happen on click
    theSection.textContent = theInput.value;
    theInput.value = '';
});