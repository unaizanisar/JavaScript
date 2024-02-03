// Declare a variable to hold the current input value
let bindingValue = "";

// Get the HTML element with the class 'show-value'
let getHtmlElement = document.querySelector('.show-value');

// Get the HTML element with the id 'exclamation'
let exclamation = document.querySelector('#exclamation');

// Set the initial styles for the 'exclamation' element
exclamation.style.display = 'none';
exclamation.style.color = 'red';

// Define a function named 'changeValue' which takes an event as a parameter
const changeValue = (event) => {
    try {
        // Get the length of the current input value
        const countCharacters = event.target.value.length;

        // Check if the character count is greater than 6
        if (countCharacters > 6) {
            // If true, update 'bindingValue' and display a message
            bindingValue = 'You have Reached the Limit of Characters';
            getHtmlElement.innerText = `Input Text: ${bindingValue}`;
            
            // Show the 'exclamation' element and disable the input
            exclamation.style.display = 'block';
            document.querySelector('.my-input').disabled = true;
        } else {
            // If false, update 'bindingValue' with the current input value
            bindingValue = event.target.value;
            getHtmlElement.innerText = `Input Text: ${bindingValue}`;
            
            // Hide the 'exclamation' element and enable the input
            exclamation.style.display = 'none';
            document.querySelector('.my-input').disabled = false;
        }

        // Update the 'show-value' element with the current 'bindingValue'
        getHtmlElement.innerText = `Input Text: ${bindingValue}`;

    } catch (error) {
        // Log any errors that occur during the execution of the function
        console.log(error.message);
    }
}
