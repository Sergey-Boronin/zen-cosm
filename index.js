const cartModal = document.querySelector('.popup');
const openCartBtn = document.querySelector('.cart__button');

console.log(openCartBtn)

function openCartModal() {
    cartModal.classList.add('popup_opened');
    document.addEventListener('keydown', closeModalEscape);
}

function closeCartModal() {
    cartModal.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeModalEscape);
}

function closeCartModalOverlay(e) {
    if (!e.target.closest('.cartmodal')){
        closeCartModal(e.target.closest('.popup'));
        console.log('122323')
    }
};

function closeModalEscape(evt) {
    if (evt.key === 'Escape') {
        closeCartModal();
        console.log('escape')
    }
};




openCartBtn.addEventListener('click', openCartModal);
cartModal.addEventListener('click', closeCartModalOverlay);
