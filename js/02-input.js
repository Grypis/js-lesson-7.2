//!   ================================================
const usernameElem = document.querySelector('.js-user-name');
const btnElem = document.querySelector('.js-btn');

usernameElem.addEventListener('input', onUsernameInput);

function onUsernameInput() {
  const value = usernameElem.value;
  const len = usernameElem.dataset.len;

  if (value.length > len) {
    usernameElem.classList.add('valid');
    usernameElem.classList.remove('invalid');
    btnElem.disabled = false;
  } else {
    usernameElem.classList.add('invalid');
    usernameElem.classList.remove('valid');
    btnElem.disabled = true;
  }
  console.log(value);
}

//!   ================================================
