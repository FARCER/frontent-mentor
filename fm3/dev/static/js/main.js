svg4everybody();

function validateForm() {
  const form = document.querySelector('form');
  const firstName = form.elements.firstName;
  const lastName = form.elements.lastName;
  const email = form.elements.email;
  const password = form.elements.password;


  form.addEventListener('submit', (e) => {
    e.preventDefault();

    validate(firstName);
    validate(lastName);
    validate(password);
    validate(email);
    if(!email.value || !validateEmail(email.value)) {

      email.parentElement.classList.add('error')
    } else {
      email.parentElement.classList.remove('error')
    }

  })

}

function validate(field) {
  if (!field.value) {
    field.parentElement.classList.add('error')
  } else {
    field.parentElement.classList.remove('error')
  }
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


validateForm();
