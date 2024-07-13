let myNotes = [];

function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// Función para agregar una nueva nota
function addNote() {
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    var tags = document.getElementById("tags").value;
    var tags_array = tags.split(',').map(tag => tag.trim()); // Separa etiquetas por comas y eliminar espacios

    const id = generateId(); // Generar un ID único
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    var note = {
        id: id,
        title: title,
        content: content,
        tags: tags_array,
        createdAt: createdAt,
        updatedAt: updatedAt
    };

    myNotes.push(note);
    
    window.location.href = 'index.html';
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