//Funcionalidad Menú
$(document).ready(function(){
    $('.sidenav').sidenav();
  });

//Funcionalidad imagen usuario

/*
//funcion para realizar post
function enviarComentario(){
  const postValue = post.value;
  const nuevoPostKey = firebase.database().ref().child("post").push().key;
  const currentUser = firebase.auth()currentUser;
  firebase.database().ref(`post/${nuevoPostKey}`).set({
    post: postValue,
    creatorName : currentUser.displayName

  })
}*/

/*
const boton = document.getElementById('boton');
boton.addEventListener('click', () =>{
    let comentario = document.getElementById('coment').value;
    document.getElementById('coment').value = '';
    const contenedor = document.getElementById('contenedor');
    const nuevoComentario = document.createElement('div');
    const contenedorTexto = document.createElement('p')
    let nuevoContenedorTexto = document.createTextNode(comentario);
    contenedorTexto.appendChild(nuevoContenedorTexto);
    nuevoComentario.appendChild(contenedorTexto);
    contenedor.appendChild(nuevoComentario);
*/
let txtMensaje = document.getElementById("coment");
const btnEnviar = document.getElementById("boton");
let chat =  document.getElementById("contenedor");

btnEnviar.addEventListener("click",()=>{
  let mensaje = textMensaje.value;
  
  firebase.database().ref('users').push({
    message : mensaje
  });
});
firebase.database().ref('users')
.on('value', function(snapshot){
  snapshot.forEach(function(e){
    let element= e.val();
    let mensaje = element.menssage;
    chat.innerHTML = chat
  })
})

    
