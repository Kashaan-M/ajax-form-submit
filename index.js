function handleSubmit(e) {
  e.preventDefault();
  const myForm = e.target;
  const formData = new FormData(myForm);

  fetch('/success.html', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString(),
  })
    .then((response) => {
      console.log('Form Successfully submitted');
      window.location.href = response.url;
    })
    .catch((error) => console.log(error));
}

document.querySelector('form').addEventListener('submit', handleSubmit);
