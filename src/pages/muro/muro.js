+//Funcionalidad Menú
+$(document).ready(function(){
       $('.sidenav').sidenav();
      });
      
      //archivo que saque en firabe donde dice agregar datos
      // Initialize Cloud Firestore through Firebase
      var db = firebase.firestore();
    //agregar documentos
    function guardar(){
        //manejo del dom, creo variables para guardar los datos que recopilare en los input 
        let nombre = document.getElementById("nombre").value
        let comentario =  document.getElementById("comentario").value
    
    
        db.collection("post").add({
            first: nombre,
            comentario: comentario
            
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            // esta linea limpia mi input
            document.getElementById("nombre").value="";
            document.getElementById("comentario").value="";
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        
    }
    //leer documentos
    let post= document.getElementById("post");
    db.collection("post").onSnapshot((querySnapshot) => {
        post.innerHTML = ""; //la tabla aparece vacia
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().first}`);
            //la linea de abajo me permite imprimi los comentarios
            post.innerHTML += `
            <div class="container">
              <div class="row">
                <div class="col s12 col l6">
                  <div class="card">
                      <h5 class="card-header">${doc.data().first}</h5>
                      <div id="post" class="card-body"></div>
                        <p class="card-text">${doc.data().comentario}</p>
                        <a id="eliminar" class="btn btn-primary" onclick="eliminar('${doc.id}')">eliminar</a>
                        <a id="editar" class="btn btn-primary" onclick="editar('${doc.id}','${doc.data().comentario}')">Editar</a>
                      </div>
                    
                  </div>
                </div>`
        });
    });
    
    //borrar datos 
    function eliminar(id){
        db.collection("post").doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }
    
    //editar datos
    
    function editar(id,comentario){
        
        document.getElementById("comentario").value= comentario;
        var boton =  document.getElementById("enviar");
        boton.innerHTML = "editar";
    
        boton.onclick =  function(){
            var washingtonRef = db.collection("post").doc(id);
            // Set the "capital" field of the city 'DC'
            
           let comentario= document.getElementById("comentario").value;
        return washingtonRef.update({
            
            comentario: comentario
        })
        .then(function() {
            console.log("Document successfully updated!");
            boton.innerHTML = "guardar";
          // esta linea limpia mi input
           document.getElementById("nombre").value="";
            document.getElementById("comentario").value="";
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }
    }
        