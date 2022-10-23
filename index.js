function handleSubmit(e) {
  e.preventDefault();
  const myForm = e.target;
  const formData = new FormData(myForm);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString(),
  })
    .then((response) => {
      console.log('Form Successfully submitted');
      console.log(response.url);
    })
    .catch((error) => console.log(error));
}

document.querySelector('form').addEventListener('submit', handleSubmit);
