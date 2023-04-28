const instagramGrid = document.querySelector("#gato-grid");
// const instagramBackdrop = document.querySelector("#gato-card");
const divCard = document.querySelector("#gato-card");


const instagramModalImage = document.querySelector("#gato-modal-image");
const instagramModalTitle = document.querySelector("#gato-modal-title");
const instagramModalText = document.querySelector("#gato-modal-text");

// const instagramModalCloseButton = document.querySelector(
//   "#instagram-modal-close-button"
// );
// const instagramModalDeleteButton = document.querySelector(
//   "#instagram-modal-delete-button"
// );

// instagramModalCloseButton.onclick = () => {
//   instagramBackdrop.className = "instagram-backdrop";
// };

async function loadInstagramImages() {
  const response = await fetch("/JSON/gatos.json");
  const instagramImages = await response.json();

  instagramImages.forEach((cat) => {
    // let divCard = document.createElement("div");
    // divCard.className = "gato-card";

    let divImage = document.createElement("div");
    divImage.className = "image";

    let divContet = document.createElement("div");
    divContet.class = "content";

    let instagramImage = document.createElement("img");
    instagramImage.src = cat.thumbnail;
    // instagramImage.className = "image";

    instagramModalTitle.innerHTML = cat.title;
    instagramModalText.innerHTML = cat.text;

    // instagramImage.onclick = () => {
    //   instagramBackdrop.className = "instagram-backdrop open";
    //   instagramModalImage.src = cat.thumbnail;
    //   instagramModalTitle.innerHTML = cat.title;
    //   instagramModalText.innerHTML = cat.text;

    //   instagramModalDeleteButton.onclick = () => {
    //     instagramBackdrop.className = "instagram-backdrop";
    //     instagramGrid.removeChild(instagramImage);
    //   }
    // };

    divContet.appendChild(instagramModalTitle);
    divContet.appendChild(instagramModalText);

    divImage.appendChild(instagramImage);
    divCard.appendChild(divImage);
    // instagramGrid.appendChild(divCard);
  });
}

loadInstagramImages();
