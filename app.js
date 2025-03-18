// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // Arreglo para almacenar los nombres de los amigos

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre); // Añadimos el nombre al arreglo de amigos
        input.value = ""; // Limpiamos el campo de entrada
        mostrarListaAmigos(); // Actualizamos la lista de amigos en la interfaz
    } else {
        alert("Por favor, ingresa un nombre válido o que no se repita.");
    }
}

// Función para mostrar la lista de amigos en la interfaz
function mostrarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista anterior

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para mezclar un arreglo de manera aleatoria (Fisher-Yates)
function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Intercambiar elementos
    }
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Por favor, agrega al menos 2 amigos para sortear.");
        return;
    }

    mezclarArray(amigos); // Mezclamos los amigos para hacer el sorteo

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar los resultados anteriores

    // Asignamos el amigo secreto a cada participante
    amigos.forEach((amigo, index) => {
        const amigoSecreto = amigos[(index + 1) % amigos.length]; // El último se empareja con el primero
        const li = document.createElement("li");
        li.textContent = `${amigo} tiene como amigo secreto a ${amigoSecreto}`;
        resultado.appendChild(li);
    });
}
