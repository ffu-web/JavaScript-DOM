let paragraphElement = document.querySelector('p');

function changeParagraphText(){
    paragraphElement.textContent = 'Clicked!';
    console.log('Paragraph Clicked!');
}

paragraphElement.addEventListener('click', changeParagraphText);

let inputElement = document.querySelector('input');

function retrievedInput(event) {
    // let enteredText = inputElement.value;
    let enteredText = event.target.value;
    console.log(enteredText);
    // console.log(event);
}

inputElement.addEventListener('input', retrievedInput);