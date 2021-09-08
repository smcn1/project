const form = document.getElementById('lotto_entry');
const name = document.getElementById('name');
const address = document.getElementById('address');
const phone = document.getElementById('phone');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkInputs();
});

function checkInputs() {
    // get the values from the inputs
    const nameValue = name.value.trim();
    const addressValue = address.value.trim();
    const phoneValue = phone.value.trim();
    const num1Value = num1.value.trim();
    const num2Value = num2.value.trim();
    const num3Value = num3.value.trim();
    const num4Value = num4.value.trim();
    
    if (nameValue === '') {
        // show error
        // add error class
        setErrorFor(name, 'Name cannot be blank');
    } else {
        // add success class
        setSuccessFor(name);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');
    
    // add error message inside small
    small.innerText = message;
    
    // add error class
    formControl.className = 'form-control error';
}

function setSucessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}