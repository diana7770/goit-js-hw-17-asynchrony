let counter = 0;

const interval = setInterval(showMessage, 1000);

function showMessage() {
  alert(`Повідомлення номер ${counter++}`);
  if (counter === 6) {
    clearInterval(interval);
  }
}
