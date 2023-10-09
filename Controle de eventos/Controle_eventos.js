// Seu objeto de eventos
let eventos = {
  tipoevento: [],
  nomeartista: [],
  data: [],
  sessoes: [],
};

// Referência aos elementos do formulário
const eventoForm = document.getElementById("evento-form");
const tipoEventoInput = document.getElementById("tipoevento");
const nomeArtistaInput = document.getElementById("nomeartista");
const dataInput = document.getElementById("data");
const sessoesInput = document.getElementById("sessoes");

// Referência à lista de eventos
const eventList = document.querySelector(".event-list");

// Adiciona um evento ao objeto de eventos
function adicionarEvento() {
  const tipoEvento = tipoEventoInput.value;
  const nomeArtista = nomeArtistaInput.value;
  const data = dataInput.value;
  const sessoes = parseInt(sessoesInput.value, 10);

  eventos.tipoevento.push(tipoEvento);
  eventos.nomeartista.push(nomeArtista);
  eventos.data.push(data);
  eventos.sessoes.push(sessoes);

  // Atualiza a lista de eventos
  atualizarListaEventos();

  // Limpa o formulário
  tipoEventoInput.value = "";
  nomeArtistaInput.value = "";
  dataInput.value = "";
  sessoesInput.value = "";
}

// Atualiza a lista de eventos na tela
function atualizarListaEventos() {
  eventList.innerHTML = "";

  for (let i = 0; i < eventos.tipoevento.length; i++) {
    const eventoItem = document.createElement("div");
    eventoItem.classList.add("event-item");
    eventoItem.innerHTML = `
      <strong>Tipo de Evento:</strong> ${eventos.tipoevento[i]}<br>
      <strong>Nome do Artista:</strong> ${eventos.nomeartista[i]}<br>
      <strong>Data:</strong> ${eventos.data[i]}<br>
      <strong>Sessões:</strong> ${eventos.sessoes[i]}<br>
    `;

    eventList.appendChild(eventoItem);
  }
}

// Manipulador de evento para o formulário
eventoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  adicionarEvento();
});

// Inicializa a lista de eventos
atualizarListaEventos();
