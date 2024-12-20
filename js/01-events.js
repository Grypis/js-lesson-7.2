/* const btnElem = document.querySelector('.js-click');
btnElem.addEventListener('click', onBtnElemClick);

function onBtnElemClick() {
  btnElem.classList.toggle('btn-box');
}
 */
//? - onTargetEvent - onBtnElemClick (for js)
//? - handleTargetEvent - handleBtnElemClick (for react)
//? - targetEventHandler - btnElemClickHandler

//! =======================================================
const btnElem = document.querySelector('.js-click');
const boxElem = document.querySelector('.js-box');

const position = {
  x: 100,
  y: 100,
};

btnElem.addEventListener('click', () => {
  position.x += 10;
  position.y += 10;

  boxElem.style.left = `${position.x}px`;
  boxElem.style.top = `${position.y}px`;
});
