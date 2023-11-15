var openModal = document.querySelector('.main-nav__button');
var popup = document.querySelector('.modal-closed');
var close = document.querySelector('.modal-close-button');

openModal.addEventListener('click', function (evt) {
	evt.preventDefault();
  popup.classList.remove('modal-closed');
	popup.classList.add('modal');
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal');
	popup.classList.add('modal-closed');
});
