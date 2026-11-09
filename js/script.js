
const nuevaTarea = document.getElementById("nuevaTarea");
const botonAgregar = document.getElementById("agregarTarea");
const listaTareas = document.getElementById("listaTareas");

let tareas = [];

function renderTasks() {

    listaTareas.innerHTML = "";

    tareas.sort(function(a, b) {
        return a.completada - b.completada;
    });

    tareas.forEach(function(tarea, indice) {

        const elemento = document.createElement("li");

        const texto = document.createElement("span");

        texto.textContent = tarea.descripcion;
        texto.classList.add("textoTarea");

        if (tarea.completada) {
            texto.classList.add("completada");
        }

        texto.addEventListener("click", function() {

            tarea.completada = !tarea.completada;

            renderTasks();

        });

        const botonEliminar = document.createElement("button");

        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("eliminar");

        botonEliminar.addEventListener("click", function() {

            tareas.splice(indice, 1);

            renderTasks();

        });

        elemento.appendChild(texto);
        elemento.appendChild(botonEliminar);

        listaTareas.appendChild(elemento);

    });

}
botonAgregar.addEventListener("click", function() {

    const descripcion = nuevaTarea.value.trim();

    if (descripcion === "") {

        alert("Por favor, escribe una tarea.");

        return;

    }

    const tarea = {
        descripcion: descripcion,
        completada: false
    };

    tareas.push(tarea);

    nuevaTarea.value = "";

    renderTasks();

});

nuevaTarea.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        botonAgregar.click();

    }

});
