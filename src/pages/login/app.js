let formulario = document.getElementById('formulario');
// console.log(formulario);

// manejar algo quiere decir que controlar lo que contiene
// el evento es un momento
function manejarSubmit(evento) {
    // preventDefault() detiene el evento, en este caso el envio no ocurre.
    evento.preventDefault();
    const correo = document.getElementById('correoElectronico').value;
    const contrasena = document.getElementById('contraseña').value;
    if(correo.length != 0 && contrasena.length != 0) {
        firebase.auth().signInWithEmailAndPassword(correo, contrasena)
        .then((respondse)=> {
            location.href ="../perfil/perfil.html";
        })
        .catch(function(error) {
            let errorCode = error.code;
            alert(errorCode);
        });
    };
}
// se ejecuta la funcion
formulario.addEventListener('submit', manejarSubmit);

const botonFacebook = document.getElementById('botonFacebook');

function inicioSesionFacebook(){
    const provider = new firebase.auth.FacebookAuthProvider(); // creamos un nuevo objeto 
    console.log(provider);
    provider.setCustomParameters({ // le decimos que haga un login con facebook y enlace un popup
        'display' : 'popup'
    });
    firebase.auth().signInWithPopup(provider)
        .then(()=>{
            console.log("Login con facebook exitoso");
        })
        .catch((error)=>{
            console.log("Error de firebase > Código > "+error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            console.log("Error de firebase > Mensaje > "+error.message); //error.message nos mostrará el mensaje de firebase del mismo error
        });
    }