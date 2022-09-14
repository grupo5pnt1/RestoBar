function capturar () {
    var nom = document.getElementById('name').value;
    var fecha = document.getElementById('start').value;
    var email = document.getElementById('email').value;
    if (nom !=''){
     if (fecha !='')
     {
        if (email !=''){

            alert("Su orden ha sido registrada! Muchas gracias por tu compra " + nom);

            } else {
              alert("Falta el campo Email");
             document.getElementById('email').focus();

            }
          

     } else {
        alert("Falta el campo Fecha");
		document.getElementById('start').focus();
     }
    } else 
    {
        alert("Falta el campo Nombre");
		document.getElementById('name').focus();
    }


}
