//Funcionalidad Menú
$(document).ready(function(){
  $('.sidenav').sidenav();
});

function perfil(user) { console.log(user);
  const perfilUsuario = document.getElementById('informacion-usuario');
  firebase.database().ref(`users/${user.uid}`) //ref es la ruta para llegar a los datos
  .once('value')
  .then((user)=>{
    const nickname = user.val().nickName;
    const nombre = user.val().nombre;
    const edad = user.val().edad;
    // console.log(user.val().nombre);
    // console.log(user.val().nickName);
    // console.log(user.val().edad);
    perfilUsuario.innerHTML = `<h3>${nickname}</h3>`;
  })
  .catch((error)=>{
      console.log("Database error > "+JSON.stringify(error));
  });
}

window.onload = () =>{
  firebase.auth().onAuthStateChanged( user =>{
      if(user){ //Si está logeado, mostraremos la opción loggedIn
          // console.log(user);
          perfil(user);
      }
  });
}
 

// function estadoUsuario() {
//   firebase.auth().onAuthStateChanged(firebaseUsers => {
//     if(firebaseUsers){
//       console.log(firebaseUsers);
//       const perfilUsuario = firebaseUsers.uid;
//       console.log(perfilUsuario);
//       perfil(perfilUsuario);
//     } else {
//       console.log('debes loguearte');
      
//     }
//   })
// }
// estadoUsuario();