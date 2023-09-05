"use strict"

    let miTablaBody = document.getElementById("miTablaBody");
    let total = document.getElementById("total");
    let items = []; // crear un arreglo vacio

    let form = document.getElementById("miFormulario");
     form.addEventListener("submit", agregarItem);   // agregar funcion y evento al botonAdd

    let botonBorr = document.querySelector("#btnBorr");
     botonBorr.addEventListener("click", borrarItem);   // agregar funcion y evento al botonBorr

    let botonBorrTodo = document.querySelector("#btnBorrTodo");
     botonBorrTodo.addEventListener("click", borrarTodo);   // agregar funcion y evento al botonBorrTodo

    let botonAddTres = document.querySelector("#btnAdd3");
     botonAddTres.addEventListener("click", agregarTres);    // agregar funcion y evento al botonAdd3

    function actualizarTotal() {
      let totalValor = 0;
    
      for (let i = 0; i < items.length; i++) {
          totalValor += items[i].subtotal;  // suma el valor de los subtotales
      }
      total.innerHTML = totalValor;
    }

    function agregarItem(e) {
      e.preventDefault();
      let formData = new FormData(form);
      let nombre = formData.get("nombre");
      let cantidad = formData.get("cantidad");
      let precio = formData.get("precio");
      let subtotal = cantidad * precio;

      let item = {
        "nombre": nombre,
        "cantidad": cantidad,
        "precio": precio,
        "subtotal": subtotal
      };

      items.push(item); // agrega items
      
        let tabla = document.getElementById("miTablaBody");
        tabla.innerHTML= " "; // que no acumule
        for(let item of items){
            tabla.innerHTML += "<tr> <td>" +item.nombre+"</td><td>"+item.cantidad+"</td><td>"+item.precio+"</td><td>"+item.subtotal+"</td></tr>";
      }
    
  actualizarTotal();
}

  function borrarItem() {
    if (items.length > 0) {
    items.pop(); // Eliminar el último elemento del arreglo "items"
  } 

  let tabla = document.getElementById("miTablaBody");
  tabla.innerHTML = ""; // Limpiar el contenido de la tabla

  for (let item of items) { // Recorre y llena con items borrados
    tabla.innerHTML += "<tr> <td>" + item.nombre + "</td><td>" + item.cantidad + "</td><td>" + item.precio + "</td><td>" + item.subtotal + "</td></tr>";
  }
  actualizarTotal();
  }

  function borrarTodo() {
  items = [];
  let tabla = document.getElementById("miTablaBody");
  tabla.innerHTML = ""; // Limpiar el contenido de la tabla

  for (let item of items) { // Recorre y llena con items borrados
  tabla.innerHTML += "<tr> <td>" + item.nombre + "</td><td>" + item.cantidad + "</td><td>" + item.precio + "</td><td>" + item.subtotal + "</td></tr>";
  }
  actualizarTotal();
}
  

  function agregarTres() {
    let itemsAutomaticos = [
      { nombre: "Remera Rosa Pastel", cantidad: 1, precio: 0, subtotal: 0 },
      { nombre: "Gorro animal print", cantidad: 1, precio: 0, subtotal: 0 },
      { nombre: "Medias 3/4", cantidad: 1, precio: 0, subtotal: 0 }
    ];

    for (let i = 0; i < itemsAutomaticos.length; i++) { 
      let item = itemsAutomaticos[i]; 
      let subtotal; 
    
      items.push(item); // Agrega los items

      let tabla = document.getElementById("miTablaBody");
          tabla.innerHTML= " "; // Hace que no acumule
          for(let item of items){ // Recorre
              tabla.innerHTML += "<tr> <td>" +item.nombre+"</td><td>"+item.cantidad+"</td><td>"+item.precio+"</td><td>"+item.subtotal+"</td></tr>";
      }
  actualizarTotal(); // Actualiza el total 
  
}
}
