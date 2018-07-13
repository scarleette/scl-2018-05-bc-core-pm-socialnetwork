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
        firebase.database().ref(nickName).once('value')
            .then((snapshot)=> {
                const usuarioEnFireBase = snapshot.val();
                if(usuarioEnFireBase != null) {
                    //usuario si existe 
                    e.preventDefault();
                    console.log('existe')
                } else {
                    //usaurio no existe
                    console.log('no existe')
                    guardarUsuarioEnFireBase(nickName, nombre, apellido, edad, correo, contrasena);

                }
               
            })
        
    }  else {
        console.log('campos vacios');
        
    }
});

function guardarUsuarioEnFireBase(nickName, nombre, apellido, edad, correo, contrasena) {
    firebase.database().ref(nickName).set({
        name: nombre,
        last_name: apellido,
        age: edad,
        email: correo,
        password: contrasena
    })
    .then((response)=> {
        console.log(response);
        
    });
};

    
//     // obtener objeto
//     const newObject = document.getElementById('formulario');
//     // Crear referencia en fireBase
//     const objetoRef = firebase.database().ref().child('objeto').set({
//         username: name,
//       });
  
//     // sincronizar cambios en los Objetos
//     objetoRef.on('value', snap =>// console.log(snap.val()));
//     // imprimir en html
//     newObject.innerHTML = JSON.stringify(snap.val()));
// })()

// Set crea un objeto con datos en database.
// set({
//       username: name,
//       email: email,
//       profile_picture : imageUrl
//     });
