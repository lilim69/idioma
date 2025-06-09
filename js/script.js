// Mensaje de bienvenida al cargar la página
window.addEventListener('load', () => {
    alert('¡Bienvenido/a al sitio del Día del Idioma! Descubre la magia de las palabras.');
});

// Mostrar dato curioso al hacer clic en el botón
document.getElementById('datoCuriosoBtn').addEventListener('click', () => {
    const parrafo = document.getElementById('datoCurioso');
    parrafo.textContent = '¿Sabías que el español esta en la lista de los idiomas mas hablados en el mundo?';
    parrafo.classList.remove('oculto');
});

// Cambiar color de fondo al hacer clic
document.addEventListener('DOMContentLoaded', () => {
    const botonFondo = document.getElementById('cambiarFondo');
    if (botonFondo) {
        botonFondo.addEventListener('click', () => {
            const colores = ['#F8F7F9', '#FFBFD8', '#D7BFBE', '#ADCAE5', '#F782A7'];
            let colorActual = getComputedStyle(document.body).backgroundColor;

            let nuevoColor;
            do {
                nuevoColor = colores[Math.floor(Math.random() * colores.length)];
                // Convertimos a RGB para compararlo correctamente
            } while (rgbToHex(colorActual) === nuevoColor.toLowerCase());

            document.body.style.backgroundColor = nuevoColor;
        });
    }

    // Función auxiliar para convertir RGB a HEX
    function rgbToHex(rgb) {
        const rgbArr = rgb.match(/\d+/g);
        if (!rgbArr) return '';
        return '#' + rgbArr.map(x => {
            const hex = parseInt(x).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }).join('');
    }
});
