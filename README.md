# Red Social

## Introducción

Existe una variedad de redes sociales que tienen un montón de utilidades. Conocemos Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin y, en general, nos ayudan a mantenernos conectados en esta era de la tecnolgía. En consideración a ello y en la deficiencia que existe de una con contenidos basados en la salud animal, hemos creado una red social llamada "LittlePetSociety", con el propósito de que nuestros usuarios puedan interactuar e informarse más sobre los animales menores; que corresponden a perros y gatos.
El plus de esta página diseñada para dispositivos móviles, es que además de la interacción que ofrecen todas las redes sociales, en una de sus múltiples vistas, muestra la opción de búsqueda de clínicas veterinarias en convenio, con disponibilidad de horarios: servicio médico veterinario a domicilio, atención clínica veterinaria durante el día y atención 24 horas. Junto con esto, también es posible realizar preguntas de orientación a médicos veterinarios a través de mensajería.
(Cabe destacar que la "orientación" siempre se basa en su significado literal, puesto a que no se considerará jamás como equivalente o reemplazo a una consulta veterinaria).


## Definición del producto

### UI

LittlePetSociety permite lo siguiente:

* Crear una cuenta
* Iniciar sesión
  - Login con Firebase:
    + Autenticación con Facebook - Google
  - Validaciones:
    + No debe haber usuarios repetidos
    + La cuenta de usuario debe ser un correo electrónico válido
    + Lo que se tipea en el input de password es secreto
  - Comportamiento:
    + Al enviarse un formulario de registro o inicio de sesión se valida
      el formulario
    + En caso haya errores, el sistema muestra mensajes de error para
      ayudar al usuario a superar estos errores
    + La aplicación solo permite acceder a usuarios con cuentas válidas
    + Al recargar la aplicación, se verifica si el usuario está
      logueado para poder mostrarle el contenido privado
* Ver el muro/timeline de la red social
  - Validaciones:
    + Al apretar el botón de publicar valida que exista texto en el input.
  - Comportamiento:
    + Permite publicar una entrada, post, imagen, etc...
    + Permite poner me gusta o algo similar (estrella por ejemplo) a una de
      esas publicaciones
    + Permite ver cuántos me gusta (o similar) tiene una publicación
    + Permite eliminar una publicación
    + Permite ver publicaciones solo de amigos o públicos (con algún filtro
      por ejemplo)
    + Permite confirmar antes de eliminar una publicación
    + Al hacer click en el botón editar permite poder cambiar el texto, imagen, o
      lo que contenga una publicación en tu red social
    + Al hacer click en guardar permite regresar a la forma que tenía antes la
      publicación, pero con la información editada
    + Al recargar la página debo de poder ver las publicaciones anteriores
    + Permite agregar nuevos amigos
    + Permite aceptar solicitudes de amigos
    + Permite eliminar amigos
    + Permite publicar solo para mis amigos
    + Permite publicar públicamente, visible para todos los usuarios de la
      red social
    + Permite enviar mensajes privados a mis amigos
  
Otras consideraciones:

* La aplicación no permite dejar hacer publicaciones vacías (textos, fotos,
  videos, posts, etc).
* El usuario puede agregar, editar y eliminar contenido de la red
  social
* El usuario puede definir la privacidad de lo que publica
* Al editar contenido, el contenido editado verá automáticamente, luego de
  darle guardar
* Al recargar la página se puede ver los textos editados

### UX

A continuación, se muestra el proceso de diseño de la red social, cómo se descubrieron las necesidades de los usuarios y cómo se llegó a la definición final del producto:

* [Elección del tema](https://i.imgur.com/12UnuuC.png)
* [Planning](https://trello.com/b/krAR13s1/red-social)
* [Sketch de la solución](https://imgur.com/a/HgwB3EO)
* [Paleta de colores](https://i.imgur.com/z0U8VIV.png)
* [Prototipo de alta fidelidad](https://www.figma.com/file/b2tXYTX2VtRmcXAp8ZcDbvL2/red-social)
* [Benchamark](https://www.slideshare.net/tjarataibo/benchamark)
* [Resultado encuesta a usuarios](https://www.slideshare.net/tjarataibo/resultado-encuesta-usuarios)
* [Guía de entrevista a usuarios](https://docs.google.com/forms/d/e/1FAIpQLSeSEutiFsjnyX_2K_mt202xc0b3sW6d2tKO7ptmyYj3YFw2nA/viewform?usp=sf_link)
* [Resultado entrevista a usuarios](https://docs.google.com/document/d/19P2juBUznhLXGsyitU-ximp73yBj7jr1cqYZAOtKa70/edit?usp=sharing)

* ¿Cuáles son los elementos básicos que tiene una red social?

Muro, acceso a publicaciones (comentarios, imágenes, videos, etc) visibles para todos los usuarios de la red social, tener acceso a la búsqueda de amigos, enviar solicitudes de amistad, aceptar y eliminar amigos, enviar mensajes privados a mis amigos.

* ¿Quiénes son los principales usuarios de producto?

Dueños de mascotas (perros y gatos), potenciales dueños en un futuro y/o personas que tienen familiares/conocidos/amigos que lo son.

* ¿Qué problema resuelve el producto para estos usuarios?

Resuelve dudas de cuidados básicos en una mascota, desde la guía y orientación de desparasitación, vacunación e implantación de microchip, hasta qué enfermedades pueden afectar a cada animal (animales menores).


* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?

Obtener información y datos relevantes sobre la salud de las mascotas, poder interactuar con una comunidad afín e informarse de lugares con atención en diferentes horarios.


* ¿Cuáles son las principales funcionalidades del producto y cuál es su prioridad?

Las principales funcionalidades son las que definen a una red social: poder ingresar con un filtro de registro o autentificación, compartir escritos, buscar amigos, compartir con ellos y con veterinarios en línea. En definitiva, la prioridad es utilizar todas estas herramientas para acercar y promover el cuidado de nuestros animales menores.

* ¿Cómo verificaste que el producto les está resolviendo sus problemas?

Realizando entrevistas que nos dieran aciertos para impulsar el producto. En la búsqueda de usuarios, muchos daban cuenta de su preocupación por sus mascotas y los puntos de intereses.

* ¿Cómo te asegurarás que estos usuarios usen este producto?

Promoviendo el producto del mismo modo como se realizó en las entrevistas, invitando a la comunidad a participar e insertar el consumo responsable y profesional de información, como lo es la salud que merecen nuestros animales.

