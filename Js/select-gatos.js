const selectGatos = document.querySelector("#gatos-name");

async function Loadgatos() {
  const select = document.getElementById("gatos-name");
  const response = await fetch("/JSON/gatos.json");
  const data = await response.json();

  data.forEach((gato) => {
    const option = document.createElement("option");
    option.value = gato.nome;
    option.text = gato.title;
    select.appendChild(option);
  });
}
function opcao() {
  let gatoSelect = document.getElementById("gatos-name");
  let gato = gatoSelect.options[gatoSelect.selectedIndex].text;

  let gatoParagrafo = document.getElementById("gatoSelecionado");
  gatoParagrafo.innerHTML = `Voce Selecionou ${gato}`;
  if (gato.substr(gato.length - 1) === "a") {
    gatoParagrafo.style.color = "blue";
  } else {
    gatoParagrafo.style.color = "red";
  }
}

Loadgatos();
