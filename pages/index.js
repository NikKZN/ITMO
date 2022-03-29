import { cardButtons }  from "../scripts/utils/constants.js";
import { Popup } from "../scripts/components/Popup.js";

const cardPopup = new Popup(".popup");

cardButtons.forEach(cardButton => {
    cardButton.addEventListener('click', () => {
        cardPopup.openPopup();
        cardPopup.setEventListeners();
    })
});
