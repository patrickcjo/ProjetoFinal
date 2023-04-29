const gatoGrid = document.querySelector("#gato-grid");

  async function loadgatoImages() {
  const response = await fetch("/JSON/gatos.json");
  const gatoImages = await response.json();

  gatoImages.forEach((cat) => {
    
    const divCard0 = document.createElement("div");
    divCard0.className = "card";

    const divModalImage0 = document.createElement("div");
    divModalImage0.className = "gato-modal-image";

    const divContent = document.createElement("div");
    divContent.className = "content";

    let gatoImage = document.createElement("img");
    gatoImage.src = cat.thumbnail;
    gatoImage.className = "image";

   
    const gatoModalTitle0 = document.createElement("h3");
    const gatoModalText0 = document.createElement("p");
      
 gatoModalTitle0.innerHTML = cat.title;
 gatoModalText0.innerHTML = cat.text;

    divContent.appendChild(gatoModalTitle0);
    divContent.appendChild(gatoModalText0);

    divModalImage0.appendChild(gatoImage);
    divCard0.appendChild(divModalImage0);
    divCard0.appendChild(divContent);
    gatoGrid.appendChild(divCard0);
  });
}

loadgatoImages();
