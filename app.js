
 var numTarj = prompt("Ingrese su número de tarjeta")

   if(numTarj!= "" && ) { // si el número de tarjeta es diferente de vacío 
      return isAValid();
  }

var  function isAValidCard(){
   
for (var i = 0; i < numTarj.length; i++) {
  var item = numTarj.pop();    //sacamos el último elemento del número
  numTarj.splice(i, 0, item);// para volverlo a colocar en la nueva variable
}  // este for es para dar vuelta los números de la tarjeta

}
