const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', e =>  {
    e.preventDefault();
    const nickName = document.getElementById('nickname').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    if(nombre.length != 0 && apellido.length != 0 && edad.length != 0
    && correo.length != 0 && contrasena.length != 0 && nickName.length != 0) {
        firebase.auth().createUserWithEmailAndPassword(correo, contrasena)
        .then(Response => {
            // console.log(Response);
            const userId = Response.user.uid;
            // console.log(userId);
            firebase.database().ref('users/' + userId).set( {
               nickName: nickName,
               nombre: nombre,
               apellido: apellido,
               edad: edad,
               correo: correo 
            })
            location.href = '../login/login.html';
        })
    }
});
