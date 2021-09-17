svg4everybody();


function formValidate() {
  const form = document.querySelector('form');
  const input = document.querySelector('input');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateEmail(input.value)) {
      input.classList.remove('error');
    }
     else {
      input.classList.add('error');
    }


  })
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


formValidate();
