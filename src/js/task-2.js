const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
form.addEventListener('submit', handleSubmit);
form.addEventListener('input', handleInput);
populateForm();

function handleInput(event) {
  const key = event.target.name;
  formData[key] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateForm() {
  const textForm = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (!textForm) {
    return;
  }
  const { email, message } = form.elements;
  email.value = textForm.email;
  message.value = textForm.message;
  formData.email = textForm.email;
  formData.message = textForm.message;
}

function handleSubmit(event) {
  event.preventDefault();

  const { email, message } = event.target.elements;

  if (email.value.length && message.value.length > 0) {
    console.log(formData);
  } else {
    return alert('Fill please all fields');
  }
  form.reset();
  localStorage.clear();
}
