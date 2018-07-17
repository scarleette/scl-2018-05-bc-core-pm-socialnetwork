const boton = document.getElementById("enviar");
boton.addEventListener('click',()=>{
    let comentario = document.getElementById("comentario").value;
    document.getElementById("comentario").value = "";
    const contenedor= document.getElementById("post");
    const nuevoPost =  document.createElement("div");
    const postText= document.createElement("p");
    let nuevoPostText= document.createTextNode(comentario);
    postText.appendChild(nuevoPostText);
    nuevoPost.appendChild(postText);
    contenedor.appendChild(nuevoPost);








})