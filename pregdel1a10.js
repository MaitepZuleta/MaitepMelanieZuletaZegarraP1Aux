//--------------pregunta 1----------------------
//PIDE POR TECLADO LA EDAD
let edad = prompt("INTRODUCE TU EDAD"); 
if (edad > 18) {
   document.write("PUEDES CONDUCIR");
  console.log("mayor");
}
//SINÓ
else {
  alert("NO PUEDES CONDUCIR");
  console.log("menor");
}

//--------------pregunta 2----------------------
/*//DECLARAMOS LA VARIABLE SUMA
var suma = 0;
//BUCLE DO WHILE PARA INTRODUCIR VARIOS
do {
      var numero = prompt("INTRODUCE UN NUMERO");
       if (Number(numero) == numero) {
              numero = Number(numero);
              suma = suma + numero;
    }
      else {
           if (numero != undefined) {
            alert(numero + " ESTO NO ES UN NUMERO ");
        }
    }
} while (numero != undefined);
document.write(suma);*/


//----------DECLARAMOS UNA VARIABLE PARA CONCATENAR LAS CADENAS
var resultado = "";
//BUCLE DO WHILE PARA INTRODUCIR VARIAS CADENAS
do {
    //PEDIMOS LA CADENA POR TECLADO
    var cadena = prompt("Introduce una cadena");
    //SI LA VARIABLE RESULTADO ESTÁ VACÍA
    if (resultado == "") {
        //CONCATENAMOS SIN UTILIZAR GUIÓN
        resultado = resultado + cadena;
    }
    //SINÓ
    else {
        //CONCATENAMOS CON GUIÓN
        resultado = resultado + "-" + cadena;
    }
    //MIENTRAS SE PULSE ACEPTAR EN EL MENSAJE EMERGENTE CONFIRM
} while (confirm("Desea seguir?"));
//SI SE PULSÓ CANCELAR IMPRIMIMOS EL RESULTADO
document.write(resultado);
//--------------pregunta 3----------------------
//PEDIMOS TODOS LOS DATOS
var nombre1 = prompt("Nombre 1:");
var edad1 = Number(prompt("Edad 1:"));

var nombre2 = prompt("Nombre 2:");
var edad2 = Number(prompt("Edad 2:"));

var nombre3 = prompt("Nombre 3:");
var edad3 = Number(prompt("Edad 3:"));

//Función max() devuelve el mayor de los argumentos pasados.
var maximo = Math.max(edad1, edad2, edad3);

if (maximo == edad1) {
    document.write("El mayor es: " + nombre1);
}
if (maximo == edad2) {
    document.write("El mayor es: " + nombre2);
}
if (maximo == edad3) {
    document.write("El mayor es: " + nombre3);
}

//--------------pregunta 4----------------------
//FUNCIÓN Math.floor: redondea al número entero menor.
    //FUNCIÓN Math.random: devuelve un número aleatorio mayor que 0 y menor que 1
    var num = Math.floor((Math.random() * 99) + 1);
    document.write(num);
    var i = 0;
    var num;
    var uno = 0;
    var dos = 0;
    var tres = 0;
    do {
        num = Math.floor((Math.random() * 99) + 1);
        if ((num != uno) && (num != dos) && (num != 3)) {
            document.write(num + "<br>");
            i++;
            if (i == 1) {
                uno = num;
            }
            if (i == 2) {
                dos = num;
            }
            if (i == 3) {
                tres = num;
            }
        }
    } while (i < 3);
//--------------pregunta 5----------------------
var cadena = prompt("Introduce una cadena de texto:");
    var numchar = cadena.length;    //Devuelve la longitud del string.
    cadena = cadena.toUpperCase();  //Devuelve el string en mayúsculas.
    var car;
    var contador = 0;
    var i;
    for (i = 0; i < numchar; i++) {
        car = cadena.charAt(i);    //recupera el caracter i del string.
        if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
            contador++;
        }
    }
    document.write("Número de Vocales: " + contador + ".");
//--------------pregunta 6----------------------
var cadena = prompt("Introduce un Texto que contenga paréntesis:");
    //Longitud de la cadena
    var numchar = cadena.length;
    var j;
    var car;
    var salida = "";
    var copiar = false;
        
	for (j = 0; j < numchar; j++) {
		car = cadena.charAt(j);    //recupera el caracter i del string.
		if (car == ")") {
            copiar = false;
        }
        if (copiar) {
            salida = salida + car;
        }
        if (car == "(") {
                copiar = true;
        }
    }
    document.write(salida);

    //--------------pregunta 7--------------------
    var cadena = prompt("Introduce un Texto:");
    var numchar = cadena.length;
    var j;
    var car;
    var salida = "";
    for (j = 0; j < numchar; j++) {
        car = cadena.charAt(j);    //recupera el caracter i del string.
        salida = car + salida;
    }
    document.write(salida);
    //--------------pregunta 8--------------------
    var numero = Number(prompt("Introduce un número entre 1 y 100"));
    if((numero >= 1) && (numero <= 100)) {
        var x = 0;
        var y = 1;
        var z;
        //IMPRIMIMOS EL PRIMER NÚMERO QUE SERÁ UN 0 Y NO SE PUEDE METER EN EL BUCLE
        document.write(x + "<br>");
        //BUCLE PARA IMPRIMIR EL RESTO DE NÚMEROS (numero-1 porque ya imprimimos uno)
        for (i = 0; i < (numero-1); i++) {
            z = x + y;
            document.write(z + "<br>");
            y = x;
            x = z;
        }
    }
    else {
        alert("Número erróneo");
    }
    //--------------pregunta 9--------------------
    var jugados = 0;
    var ganados = 0;
    var perdidos = 0;
    do {
        var jugada = prompt("Escribe \"piedra\", \"papel\" o \"tijera\"");
        //GUARDAMOS UN NÚMERO ALEATORIO DE 1 AL 9
        var aleatorio = Math.floor((Math.random() * 9) + 1);
        var elige = "";
        if (aleatorio <= 3) {
            elige = "piedra";
        }
        else if (aleatorio <= 6) {
            elige = "papel";
        }
        else {
            elige = "tijera";
        }

        if ((jugada == "piedra") && (elige == "piedra")) {
            alert(jugada+"-"+elige+": Empate");
        }
        else if ((jugada == "piedra") && (elige == "papel")) {
            alert(jugada+"-"+elige+": Gana PC");
            perdidos++;
        }
        else if ((jugada == "piedra") && (elige == "tijera")) {
            alert(jugada+"-"+elige+": Gana Jugador");
            ganados++;
        }
        else if ((jugada == "papel") && (elige == "papel")) {
            alert(jugada+"-"+elige+": Empate");
        }
        else if ((jugada == "papel") && (elige == "tijera")) {
            alert(jugada+"-"+elige+": Gana PC");
            perdidos++;
        }
        else if ((jugada == "papel") && (elige == "piedra")) {
            alert(jugada+"-"+elige+": Gana Jugador");
            ganados++;
        }
        else if ((jugada == "tijera") && (elige == "tijera")) {
            alert(jugada+"-"+elige+": Empate");
        }
        else if ((jugada == "tijera") && (elige == "piedra")) {
            alert(jugada+"-"+elige+": Gana PC");
            perdidos++;
        }
        else if ((jugada == "tijera") && (elige == "papel")) {
            alert(jugada+"-"+elige+": Gana Jugador");
            ganados++;
        }
        jugados++;

    } while (confirm("Jugar de nuevo"));

    document.write("Partidas jugadas: "+jugados+"<br>");
    document.write("Partidas ganadas: "+ganados+"<br>");
    document.write("Partidas perdidas: "+perdidos+"<br>");
    document.write("Partidas empatadas: "+(jugados-ganados-perdidos));
    //--------------pregunta 10--------------------

    function masIva(precio, iva){
      iva = iva || 21
      var coniva = (precio + precio*iva/100);
      return coniva;
    }
    var precio = Number(prompt("Introduce un precio"));
    var iva = Number(prompt("Introduce el iva"));
    if(iva > 0){
      var resultado = masIva(precio, iva);
    }
    else{
      var resultado = masIva(precio);
    }
    document.write("Precio sin iva: " + precio);
    document.write("<br>Precio más Iva: " + resultado);




