function mostrarFechaHora() {
  const contenedor = document.getElementById('fechaHora');
  
  if (!contenedor) {
    console.warn('El contenedor con id "fechaHora" no se encontró en esta página.');
    return;
  }

  const ahora = new Date();

  const opciones = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };

  const fechaHoraFormateada = ahora.toLocaleString('es-CL', opciones);
  contenedor.textContent = `Fecha y hora actual: ${fechaHoraFormateada}`;
}

// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  mostrarFechaHora(); // Mostrar al cargar
  setInterval(mostrarFechaHora, 1000); // Actualizar cada segundo
});

