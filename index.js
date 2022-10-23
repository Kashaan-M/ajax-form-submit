function handleSubmit(e) {
  e.preventDefault();
  const myForm = e.target;
  const formData = new FormData(myForm);
  const values = [...formData.entries()];
  console.log('formData', values);

  fetch('/success.html', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString(),
  })
    .then((response) => {
      console.log('Form Successfully submitted');
      setTimeout(() => {
        window.location.href = response.url;
      }, 3000);
    })
    .catch((error) => console.log(error));
}

document.querySelector('form').addEventListener('submit', handleSubmit);
