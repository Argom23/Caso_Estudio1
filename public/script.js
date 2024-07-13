let myNotes = JSON.parse(localStorage.getItem('notes')) || [];

function saveNotesToFile(notes) {
    fetch('/save-notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(notes)
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// Función para agregar una nueva nota
function addNote() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const tags = document.getElementById("tags").value;
    const tags_array = tags.split(',').map(tag => tag.trim());

    const id = generateId();
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const note = {
        id: id,
        title: title,
        content: content,
        tags: tags_array,
        createdAt: createdAt,
        updatedAt: updatedAt
    };

    myNotes.push(note);
    localStorage.setItem('notes', JSON.stringify(myNotes));
    saveNotesToFile(myNotes);

    window.location.href = 'index.html';
}

// Función para eliminar una nota
function deleteNote(noteId) {
    myNotes = myNotes.filter(note => note.id !== noteId); // Elimina la nota de la lista
    localStorage.setItem('notes', JSON.stringify(myNotes));
    saveNotesToFile(myNotes); // Guarda la lista actualizada de notas
    displayNotes(); 
}

function displayNotes() {
    const notesContainer = document.getElementById('notes-container');
    const noNotesMessage = document.getElementById('no-notes-message');

    notesContainer.innerHTML = '';
    if (myNotes.length === 0) {
        noNotesMessage.classList.remove('d-none');
    } else {
        noNotesMessage.classList.add('d-none');
        myNotes.forEach(note => {
            const noteCard = document.createElement('div');
            noteCard.classList.add('note-card', 'col');

            noteCard.innerHTML = `
                <h2>${note.title}</h2>
                <p>${note.content}</p>
                <p><strong>Etiquetas:</strong> ${note.tags.join(', ')}</p>
                <p><small>Creada: ${new Date(note.createdAt).toLocaleString()}</small></p>
                <button class="btn btn-danger" onclick="deleteNote('${note.id}')">Eliminar</button>
            `;

            notesContainer.appendChild(noteCard);
        });
    }
}

// Inicializa la visualización de notas cuando se carga la página
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', displayNotes);
} else {
    displayNotes();
}

/* function findNote() {
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    var tagsS = document.getElementById("tags").value;
    var tags = tagsS.split(','); // Separar etiquetas por comas y eliminar espacios

    const id = generateId(); // Generar un ID único
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const note = {
        id,
        title,
        content,
        tags,
        createdAt,
        updatedAt
    };
} */