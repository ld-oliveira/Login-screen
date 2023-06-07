const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login__button');

const handlefocus = ({ target }) =>{
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handlefocusOut = ({ target }) => {

    if(target.value === '') {
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
    }
}

const handleChange = () => {
    const [username, password] = inputs;
  
    if (username.value && password.value.length >= 8) {
      button.removeAttribute('disabled');
    } else {
      button.setAttribute('disabled', '');
    }
  }

inputs.forEach((input) => input.addEventListener('focus', handlefocus));
inputs.forEach((input) => input.addEventListener('focusout', handlefocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));