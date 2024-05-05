function validation(form) {
  let result = true;

  function createError(input, text) {
    const parent = input.parentNode;
    const errorText = document.createElement('p');

    parent.classList.add('error');
    errorText.classList.add('error-text');
    errorText.textContent = text;

    parent.append(errorText);
  }

  function removeError(input) {
    const parent = input.parentNode;

    if (parent.classList.contains('error')) {
      parent.querySelector('.error-text').remove();

      parent.classList.remove('error');
    }
  }

  form.querySelectorAll('.input-control').forEach(input => {
    removeError(input);

    if (input.dataset.required == 'true') {
      if (input.value == '') {
        removeError(input);
        createError(input, "The field isn't filled!");

        result = false;
      }
    }
  });

  return result;
}

document.querySelectorAll('.contact-form').forEach(form => {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const submitData = this.querySelector('.submit-text');

    if (validation(this) == true) {
      submitData.textContent = 'The form has been tested successfully!';

      this.reset();
    } else {
      submitData.textContent = '';
    }
  });
});
