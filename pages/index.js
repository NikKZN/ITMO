import { cardButtons, firstButton, secondButton, educationCards, firstCard, secondCard}  from "../scripts/utils/constants.js";
import { Popup } from "../scripts/components/Popup.js";

const cardPopup = new Popup(".popup");

cardButtons.forEach(cardButton => {
    cardButton.addEventListener('click', () => {
        cardPopup.openPopup();
        cardPopup.setEventListeners();
    });
});

function toggleButtonAndCardHandler(button1, button2, card1, card2) {
    button1.classList.add("education__button_active");
    button1.setAttribute("disabled", "disabled");

    button2.classList.remove("education__button_active");
    button2.removeAttribute("disabled");

    card1.classList.toggle("education__card_hide");
    card2.classList.toggle("education__card_hide");

    educationCards.classList.add("education__cards_row");
    educationCards.classList.toggle("education__cards_row-reverse");
}

firstButton.setAttribute("disabled", "disabled"); // disabled button in first rendering
secondCard.classList.add("education__card_hide"); // hide second card

firstButton.addEventListener('click', () => toggleButtonAndCardHandler(firstButton, secondButton, firstCard, secondCard));
secondButton.addEventListener('click', () => toggleButtonAndCardHandler(secondButton, firstButton, secondCard, firstCard));
