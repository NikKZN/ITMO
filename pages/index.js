import { cardButtons, firstButton, secondButton, educationCards, firstCard, secondCard }  from "../scripts/utils/constants.js";
import { Popup } from "../scripts/components/Popup.js";

const cardPopup = new Popup(".popup");

cardButtons.forEach(cardButton => {
    cardButton.addEventListener('click', () => {
        cardPopup.openPopup();
        cardPopup.setEventListeners();
    })
});

firstButton.setAttribute("disabled", "disabled"); //disabled button in first rendering
secondCard.classList.add("education__card_hide"); //hide second card

firstButton.addEventListener('click', () => {
    firstButton.classList.add("education__button_active");
    firstButton.setAttribute("disabled", "disabled");
    secondButton.classList.remove("education__button_active");
    secondButton.removeAttribute("disabled");
    educationCards.classList.remove("education__cards_row-reverse");
    educationCards.classList.add("education__cards_row");
    secondCard.classList.add("education__card_hide");
    firstCard.classList.remove("education__card_hide");
})

secondButton.addEventListener('click', () => {
    secondButton.classList.add("education__button_active");
    secondButton.setAttribute("disabled", "disabled");
    firstButton.classList.remove("education__button_active");
    firstButton.removeAttribute("disabled");
    educationCards.classList.add("education__cards_row-reverse");
    secondCard.classList.remove("education__card_hide");
    firstCard.classList.add("education__card_hide");
})
