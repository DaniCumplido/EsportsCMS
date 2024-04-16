// HIDE/SHOW PASSWORD

document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los elementos con la clase 'eye-toggle'
    var eyeElements = document.querySelectorAll('.eye-toggle');

    // Iterar sobre cada elemento 'eye-toggle'
    eyeElements.forEach(function (eye) {
        // Encontrar el campo asociado usando el atributo 'data-target'
        var targetId = eye.dataset.target;
        var key = document.getElementById(targetId);

        // Agregar el evento 'mousedown'
        eye.addEventListener('mousedown', function () {
            key.type = 'text';
            eye.classList.remove('bi-eye-slash-fill');
            eye.classList.add('bi-eye-fill');
        });

        // Agregar el evento 'mouseup'
        eye.addEventListener('mouseup', function () {
            key.type = 'password';
            eye.classList.remove('bi-eye-fill');
            eye.classList.add('bi-eye-slash-fill');
        });
    });
});