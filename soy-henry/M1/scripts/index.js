class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository {
    constructor() {
        this.activities = [];
    }

    getAllActivities() {
        return this.activities;
    }

    createActivity(id, title, description, imgUrl) {
        const newActivity = new Activity(id, title, description, imgUrl);
        this.activities.push(newActivity);
    }

    deleteActivity(id) {
        this.activities = this.activities.filter(activity => activity.id !== id);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const repo = new Repository(); // Instancia de Repository

    document.getElementById('activity-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Previene el comportamiento por defecto de enviar el formulario

        // Obtiene los valores de los campos del formulario
        const id = Date.now(); // Genera un ID único basado en el tiempo actual
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const imgUrl = document.getElementById('imgUrl').value;

        // Llama al método createActivity de la instancia de Repository
        repo.createActivity(id, title, description, imgUrl);

        console.log('Actividad creada:', title);
        console.log('Todas las actividades:', repo.getAllActivities());

        // Crear la tarjeta de actividad
        const activityCard = document.createElement('div');
        activityCard.className = 'activity-card relative';
        activityCard.innerHTML = `
    <div class="activity-delete">X</div>
    <img src="${imgUrl}" alt="Imagen de la actividad" class="activity-image">
    <div class="activity-info">
        <h3 class="activity-title">${title}</h3>
        <p class="activity-description">${description}</p>
    </div>
`;

        // Agregar manejador de eventos para borrar la actividad
        const deleteButton = activityCard.querySelector('.activity-delete');
        deleteButton.addEventListener('click', () => {
            repo.deleteActivity(id); // Llama al método para borrar la actividad
            activityCard.remove(); // Elimina la tarjeta de actividad del DOM
        });

        document.querySelector('.view-activity').appendChild(activityCard);

        // Opcional: Limpia el formulario después de enviar
        this.reset();
    });
});

// Ejemplo de uso
const repo = new Repository();
repo.createActivity(1, 'Caminata en el parque', 'Una caminata tranquila a través del parque central.', 'https://example.com/image.jpg');
repo.createActivity(2, 'Lectura de libro', 'Sesión de lectura de tu libro favorito.', 'https://example.com/book.jpg');

console.log(repo.getAllActivities()); // Muestra todas las actividades

repo.deleteActivity(1); // Elimina la actividad con id 1

console.log(repo.getAllActivities()); // Muestra las actividades restantes