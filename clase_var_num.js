// var num1 = 200.3

// var total = num1 * 100 * 3 / 100

// var totalWithMath = Math.round(num1 * 100 * 3) / 100

// var TotalStr = totalWithMath.toFixed(2)

var jhon = {
  nombre : 'Jhon',
  apellido: 'Trillos',
  edad: 33
}

var stella = {
  nombre : 'Stella',
  apellido: 'Gomez',
  edad: 28
}

function imprimirNombreYEdad(persona) {
  var { nombre } = persona
  var { edad } = persona
  console.log(`Hola, soy ${ nombre } y tengo ${edad}`)
}

