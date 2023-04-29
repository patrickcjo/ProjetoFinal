const selectGatos = document.querySelector("#gatos-name");

async function Loadgatos() {
  const select = document.getElementById("gatos-name");
  const response = await fetch("/JSON/gatos.json");
  const data = await response.json();
  // try {
  //   // Carrega o arquivo JSON

  //   // Itera sobre os objetos do arquivo JSON
  data.forEach((gato) => {
    // Cria uma nova opção no <select> para cada objeto
    const option = document.createElement("option");
    option.value = gato.nome;
    option.text = gato.title;
    select.appendChild(option);
  });
}

// Chama a função assíncrona para carregar os gatos
Loadgatos();
