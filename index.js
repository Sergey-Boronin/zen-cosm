const cartModal = document.querySelector('.cartmodal');
const openCartBtn = document.querySelector('.cart__button');

console.log(openCartBtn)

function openCartModal() {
    cartModal.classList.toggle('.cartmodal_visible');
    console.log('раз')
}

openCartBtn.addEventListener('click', openCartModal);
