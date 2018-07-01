let formulario = document.getElementById('formulario');
// console.log(formulario);

// manejar algo quiere decir que controlar lo que contiene
// el evento es un momento
function manejarSubmit(evento) {
    // preventDefault() detiene el evento, en este caso el envio no ocurre.
    evento.preventDefault();
    // console.log(evento.target);
    // esta constante rescata el valor de lo que contiene el imput 'correoElectronico'
    const correo = document.getElementById('correoElectronico').value;
    //esta constante rescata el valor de lo que contiene el input 'contraseña'
    const contrasena = document.getElementById('contraseña').value;
    // esta es la funcion que permite logear a los usuarios eso quiere decir verificar que ya se han registrado con anterioridad
    firebase.auth().signInWithEmailAndPassword(correo, contrasena)
    //esta primera promesa nos dice que si la infomacion es correcta y el usuario esta logeado entonces lo redirecionara 
    //a la pagina de perfil
    .then(function(response) {
        // console.log(response);
        location.href ="../perfil/perfil.html";
    })
    // en caso de que el usuario no este registro mostrara un mensaje de alerta con el error
    .catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        alert(errorCode + errorMessage);
        // console.log(errorCode);
        // console.log(errorMessage);
    });
};
// se ejecuta la funcion
formulario.addEventListener('submit', manejarSubmit);