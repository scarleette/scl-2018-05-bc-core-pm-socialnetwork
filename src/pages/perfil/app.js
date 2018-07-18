function perfil() {
  const perfilUsuario = document.getElementById('informacion-usuario');
  const dbRefInfoUsuario = firebase.database().ref();
  dbRefInfoUsuario.on('value', snap => 
  perfilUsuario.innerHTML = JSON.stringify(snap.val(),null,1));
  // console.log(dbRefInfoUsuario);
}
perfil();

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