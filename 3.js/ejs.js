//EJ1 
const ej1 = (a , b) => {
    return a + b
}

console.log(ej1(2,5))

//EJ2

const ej2 =(arr) => {
    return arr.sort()
}

let arr = [4,5,1,8,2,4]

console.log(ej2(arr));

//EJ3

let vector = [12,5,3,9,7,6,4,2]


pares = vector.filter((num) => {
    return num % 2 === 0
})

console.log(pares);

let elementoEj3 = document.getElementById("ej3")
elementoEj3.innerHTML = pares


//EJ4
let arrej4 = [2,4,5,3,12,455,23,55]
let max = Math.max(...arrej4)
console.log(max);

//EJ5
function primo(numero) {
    if (numero <= 1) {
      return false;
    }
    
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  function sumaPrimos(numero) {
    let suma = 0;
    
    for (let i = 2; i <= numero; i++) {
      if (primo(i)) {
        suma += i;
      }
    }
    
    return suma;
  }
  
  const numero = 8;
  const suma = sumaPrimos(numero);
  console.log(`La suma de los números primos menores o iguales a ${numero} es: ${suma}`);

  //EJ6
/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ej06</title>
</head>
<body>
    <button id="boton" onclick="cambiaColor()">Clic para cambiar el color</button>
    <script>
    function cambiaColor() {
      const boton = document.getElementById('boton');
      boton.style.backgroundColor = "orange";
    }
    </script>   
</body>
</html>*/

//EJ7
/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ej07</title>
</head>
<body>
    <button onclick="document.getElementById('divInvisible').classList.toggle('oculto')">Ocultar/Mostrar Div</button>
    <div id="divInvisible">Clic para que desaparezca</div>

    <style>
    .oculto {
    display: none;
    }
</style>
</body>
</html>*/

//EJ8

/*<!DOCTYPE html>
<html>
<head>
  <title>Tabla de Personas</title>
</head>
<body>

<table id="tablaPersonas" border="1">
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Edad</th>
      <th>Sexo</th>
      <th>Teléfono</th>
    </tr>
  </thead>
  <tbody>
    <tr id="filaPersona">
      <td id="nombre"></td>
      <td id="apellido"></td>
      <td id="edad"></td>
      <td id="sexo"></td>
      <td id="telefono"></td>
    </tr>
  </tbody>
</table>*/

//EJ9

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ej09</title>
</head>
<body>
    <form id="Formulario">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required><br>
      
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br>
      
        <button type="button" onclick="mostrarEnConsola()">Mostrar valores en consola</button>
      </form>
      
      <script>
      function mostrarEnConsola() {
        let nombre = document.getElementById('nombre').value;
        let email = document.getElementById('email').value;
        console.log(`Nombre: ${nombre}`);
        console.log(`Email: ${email}`);
      }
      </script>
      
</body>
</html>
*/

//EJ10

/*CSS
table {
    border-collapse: collapse;
    width: 100%;
    border: 2px solid #000;
}

th, td {
    border: 1px solid #000;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

tr:nth-child(odd) {
    background-color: #ffffff;
}

HTML

<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="ej10.css">
    <title>Ejercicio 10</title>
</head>
<body>
    <table id="tabla">
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Nombre De la Empresa</th>
            <th>Direccion</th>
        </tr>
    </table>
    <script src="ej10.js"></script>
</body>
</html>

JS

const tabla = document.getElementById("tabla");
const apiURL = "https://jsonplaceholder.typicode.com/users";

fetch(apiURL)
  .then(response => response.json())
  .then(data => {
    data.forEach(usuario => {
      const fila = tabla.insertRow();
      fila.innerHTML = `
        <td>${usuario.name}</td>
        <td>${usuario.username}</td>
        <td>${usuario.email}</td>
        <td>${usuario.company.name}</td>
        <td>${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}, ${usuario.address.zipcode}</td>
      `;
    });
  })
  .catch(error => {
    alert(`Error al obtener los datos de la API: ${error.message}`);
  });

*/