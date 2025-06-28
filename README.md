# PulgaStore6
Actividad grupal 6


Plugin utilizado: DataTables
DataTables es un plugin basado en jQuery que transforma tablas HTML estáticas en tablas interactivas, agregando funcionalidades como búsqueda, ordenamiento, paginación y traducción de textos.

Pasos para la implementación
Selección del plugin
Se eligió DataTables, un plugin ampliamente utilizado y compatible con jQuery y Bootstrap, ideal para mostrar información estructurada como catálogos de productos.

Integración del plugin en el HTML

Se insertó una tabla HTML con productos justo antes de la sección “GALERÍA DE PRODUCTOS”.

Se agregó un id a la tabla (id="tabla-productos") para poder inicializar el plugin desde JavaScript.

Incorporación de hojas de estilo y scripts

En el <head> del archivo HTML se agregó el CSS oficial de DataTables.

Antes del cierre de </body> se cargaron:

jQuery (jquery.min.js)

DataTables (jquery.dataTables.min.js)

Script de inicialización con traducción al español.

Inicialización del plugin
Se utilizó un bloque $(document).ready() para activar DataTables sobre la tabla con el siguiente código:

javascript
Copiar
Editar
$('#tabla-productos').DataTable({
  language: {
    url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json'
  }
});
Adaptación visual

Se utilizó la clase table y table-bordered de Bootstrap para que la tabla tuviera un diseño consistente con el resto del sitio.

Validación funcional
Se probó la búsqueda, el orden por columnas y la paginación. Todo funciona correctamente en navegadores modernos.

Publicación del proyecto en GitHub

Se inicializó el repositorio con git init.

Se subió a GitHub usando los comandos git add, git commit y git push
