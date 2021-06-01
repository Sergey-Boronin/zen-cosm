// открытие закрытие корзины
const cartModal = document.querySelector('.popup');
const openCartBtn = document.querySelector('.cart__button');

function openCartModal() {
    cartModal.classList.add('popup_opened');
    document.addEventListener('keydown', closeModalEscape);
};

function closeCartModal() {
    cartModal.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeModalEscape);
};

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
//_______________________________

//счетчики корзины

const increaseButton = document.querySelector('.increase__counter');
const decreaseButton = document.querySelector('.decrease__counter');
const resetButton = document.querySelector('.cartmodal__clear-cart');

console.log(increaseButton, decreaseButton,'increaseButton')

function createCounter() {
    let counter = 0;

    const counterText = document.querySelector('.counter__value');

    function increaseCounter() {
        counter = counter + 1;
        counterText.textContent = counter;
    }

    function decreaseCounter() {
        if (counter > 0) {
            counter = counter - 1;
            counterText.textContent = counter;
        }
        {
            console.log('zero')
        }
    }

    function resetCounter() {
        counter = 0;
        counterText.textContent = counter;
    }

    return {
        increaseCounter,
        decreaseCounter,
        resetCounter
    };
}

const counter1 = createCounter();

increaseButton.addEventListener('click', function () {
    counter1.increaseCounter();
});

decreaseButton.addEventListener('click', function () {
    counter1.decreaseCounter();
});

resetButton.addEventListener('click', function () {
    counter1.resetCounter();
});
