const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value // Hash, Enrypt (https)
    }
    //send to backend
    console.log(user);
}

function validateForm() {
    //Using constraint API
    isValid = form.checkValidity();
    if (!isValid){
    // style main message for an error
    message.textContent = 'Please fill out all fields';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
    }
    // Check to see if passwords match
    if (password1El.value === password2El.value){
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        message.textContent = 'Passwords do not match.';
        messageContainer.style.borderColor = 'red';
        message.style.color = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }
    // If form is valid and passwords match
    if (isValid && passwordsMatch) {
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

function processFormData(e) {
    //usually refreshes page --> automatically sends to backend
    e.preventDefault();
    //Validate form
    validateForm();
    // submit data if valid
    if (isValid && passwordsMatch){
        storeFormData();
    }
}

form.addEventListener('submit', processFormData);