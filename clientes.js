document.addEventListener('DOMContentLoaded', function() {
    const clientContainer = document.querySelector('#client-container')
    const clientURL = `http://localhost:3000/clientes`
    const clientForm = document.querySelector('#client-form')
    
    fetch(`${clientURL}`)
        .then( response => response.json() )
        .then( clientData => clientData.forEach(function(client) {
            clientContainer.innerHTML += `
            <div id=${client.id}>
                <h2>Nome: ${client.nome}</h2>
                <h4>Endereço: ${client.endereco}</h4>
                <h4>CPF: ${client.cpf}</h4>
                <h4>Data de nascimento: ${client.nascimento}</h4>
                <h4>Faturamento: ${client.faturamento}</h4>
                <button data-id="${client.id}" id="edit-${client.id}" data-action="edit">Edit</button>
                <button data-id="${client.id}" id="delete-${client.id}" data-action="delete">Delete</button>
            </div>`
    })) // end of client fetch

    clientForm.addEventListener('submit', (e) => {
        e.preventDefault()

        console.log(e.target)

        const nomeInput = clientForm.querySelector('#nome').value
        const enderecoInput = clientForm.querySelector('#endereco').value
        const cpfInput = clientForm.querySelector('#cpf').value
        const nascimentoInput = clientForm.querySelector('#nascimento').value
        const faturamentoInput = clientForm.querySelector('#faturamento').value

        fetch(`${clientURL}`, {
            method: 'POST',
            body: JSON.stringify({
              nome: nomeInput,
              endereco: enderecoInput,
              cpf: cpfInput,
              nascimento: nascimentoInput,
              faturamento: faturamentoInput
            }),
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then( response => response.json())
        .then( client => {
                clientContainer.innerHTML += `
                <div id=${client.id}>
                <h2>Nome: ${client.nome}</h2>
                <h4>Endereço: ${client.endereco}</h4>
                <h4>CPF: ${client.cpf}</h4>
                <h4>Data de nascimento: ${client.nascimento}</h4>
                <h4>Faturamento: ${client.faturamento}</h4>
                <button data-id="${client.id}" id="edit-${client.id}" data-action="edit">Edit</button>
                <button data-id="${client.id}" id="delete-${client.id}" data-action="delete">Delete</button>
                </div>`
        })
    }) // end of client form submit
})