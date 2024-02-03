let bindingValue = "";
let getHtmlElement = document.querySelector('.show-value');
let exclamation = document.querySelector('#exclamation');

exclamation.style.display = 'none';
exclamation.style.color = 'red';


const changeValue = (event) => {
    try {
        const countCharacters = event.target.value.length;

        if (countCharacters > 6) {
            bindingValue = 'You have Reached the Limit of Characters';
            getHtmlElement.innerText = `Input Text: ${bindingValue}`;
            exclamation.style.display = 'block';
            document.querySelector('.my-input').disabled = true;
        } else {
            bindingValue = event.target.value;
            getHtmlElement.innerText = `Input Text: ${bindingValue}`;
            exclamation.style.display = 'none';
            document.querySelector('.my-input').disabled = false;
        }

        getHtmlElement.innerText = `Input Text: ${bindingValue}`;

    } catch (error) {
        console.log(error.message);
    }
}
