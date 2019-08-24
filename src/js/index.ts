const cardButtons = document.getElementsByClassName("card-button") as HTMLCollectionOf<HTMLElement>;

Array.from(cardButtons).forEach(cardButton => {
    cardButton.addEventListener("click", () => {
        const cardCarousel = cardButton.parentElement.querySelector(".card-carousel") as HTMLElement;

        if(cardCarousel.classList.contains("hidden")) {
            cardCarousel.classList.remove("hidden");
      }  else {
            cardCarousel.classList.add("hidden");
      }
   });
});