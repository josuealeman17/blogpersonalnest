# Blog Personal Nest

SALUDOS INGENIERO! A continuacion, se explica como se agrego la funcionalidad de los comentarios al blog!

## Mejoras Futuras

- [✅] Implementación de autenticación y autorización.
- [✅] Implementación de comentarios en las publicaciones.
- [❌] Mejorar la validación de datos en las solicitudes POST y PUT.


## SET UP

Creamos una carpeta "comments" dentro del directorio "src". Y dentro los siguientes archivos, que nos ayudaran a implementar la nueva funcionalidad.
  a. comments.model.ts: Aqui es donde definimos la estructura de nuestro comentario. Debe tener un campo que haga referencia al ID del post al que pertenece (postId).
  
  b. comments.service.ts: En este archivo, se implementan funciones para crear, leer, actualizar y eliminar (CRUD) comentarios; contiene la logica de negocio relacionada con los comentarios.
  
  c. comment.controller.ts: maneja las solicitudes HTTP relacionadas con los comentarios. Contiene métodos que corresponden a diferentes operaciones CRUD y que se asocian a diferentes rutas URL
  
  d. comment.module.ts: Es responsable de agrupar y proporcionar todos los componentes relacionados con los comentarios en la aplicación. En este archivo, se declaran e importan el controlador de comentarios y el servicio de comentarios. El módulo de comentarios se importa luego en el módulo principal (app.module.ts) para que los comentarios estén disponibles en toda la aplicación.


## Licencia

[MIT](LICENSE)
