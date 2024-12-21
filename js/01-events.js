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
/* const btnElem = document.querySelector('.js-click');
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
}); */

//! =======================================================
/* const addBtnElem = document.querySelector('.js-add');
const removeBtnElem = document.querySelector('.js-remove');
const testBtnElem = document.querySelector('.js-test');

addBtnElem.addEventListener('click', () => {
  console.log('Hello Add');
  testBtnElem.addEventListener('click', onTestBtnClick);
});

removeBtnElem.addEventListener('click', () => {
  console.log('Hello Remove');
  testBtnElem.removeEventListener('click', onTestBtnClick);
});

function onTestBtnClick() {
  console.log('Hello Test');
}
 */
