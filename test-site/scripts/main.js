/*
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hola mundooo';

// esto es un comentario
/* esto es un comentario también
*/

/*
let helado = 'macolate';
if(helado === 'chocolate') {
    console.log('Sí, me gusta el helado de chocolate');
}   else {
    console.log('No, no me gusta el helado de chocolate');
}
*/

// FUNCIONES
/*
function multiplicacion(num1, num2) {
    let resultado = num1 * num2;
    return resultado
}

console.log(multiplicacion(4, 7));
console.log(multiplicacion(0.5, 3));
*/
/*
document.querySelector('html').onclick = function() {
    alert('Ay! Para de pincharme, desglaseado');
}
*/

let miimagen = document.querySelector('img');

miimagen.onclick = function() {
    let mifuente = miimagen.getAttribute('src');
    if(mifuente === 'images/gato.webp') {
        miimagen.setAttribute('src', 'images/gato-malo.jpg');
    }   else {
        miimagen.setAttribute('src', 'images/gato.webp');
    }
}

let miboton = document.querySelector('button');
let miencabezado = document.querySelector('h1');

function ponernombreusuario() {
    let minombre = prompt('Por favor, introduzca su nombre:');
    if(!minombre) {
        ponernombreusuario();
    }   else {
        localStorage.setItem('nombre', minombre);
        miencabezado.textContent = 'Te llamas ' + minombre;
    }
}

miboton.onclick = function() {
    ponernombreusuario();
}