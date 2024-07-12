// Función para agregar una nueva nota
function addNote() {
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
}

