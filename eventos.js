document.addEventListener('DOMContentLoaded', function() {
    const eventContainer = document.querySelector('#event-container')
    const eventURL = `http://localhost:3000/eventos`
    const bookForm = document.querySelector('#event-form')
    
    fetch(`${eventURL}`)
        .then( response => response.json() )
        .then( bookData => bookData.forEach(function(event) {
            eventContainer.innerHTML += `
            <div id=${event.id}>
                <h2>Tipo do evento: ${event.tipo}</h2>
                <h4>Artista(s): ${event.artista}</h4>
                <h4>Data: ${event.data}</h4>
                <h4>Sessões: ${event.sessoes}</h4>
                <button data-id="${event.id}" id="edit-${event.id}" data-action="edit">Edit</button>
                <button data-id="${event.id}" id="delete-${event.id}" data-action="delete">Delete</button>
            </div>`
    })) // end of event fetch

    bookForm.addEventListener('submit', (e) => {
        e.preventDefault()

        console.log(e.target)

        const tipoInput = bookForm.querySelector('#tipo').value
        const artistaInput = bookForm.querySelector('#artista').value
        const dataInput = bookForm.querySelector('#data').value
        const sessoesInput = bookForm.querySelector('#sessoes').value

        fetch(`${eventURL}`, {
            method: 'POST',
            body: JSON.stringify({
              tipo: tipoInput,
              artista: artistaInput,
              data: dataInput,
              sessoes: sessoesInput
            }),
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then( response => response.json())
        .then( event => {
                eventContainer.innerHTML += `
                <div id=${event.id}>
                <h2>Tipo do evento: ${event.tipo}</h2>
                <h4>Artista(s): ${event.artista}</h4>
                <h4>Data: ${event.data}</h4>
                <h4>Sessões: ${event.sessoes}</h4>
                <button data-id="${event.id}" id="edit-${event.id}" data-action="edit">Edit</button>
                <button data-id="${event.id}" id="delete-${event.id}" data-action="delete">Delete</button>
                </div>`
        })
    }) // end of event form submit
})