"use strict";
//*** Obteniendo datos con fetch

var boton = document.getElementById('boton');
var contenedor = document.getElementById('contenedor');
var posts = null;

boton.addEventListener('click', function () {

    fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=num')// apuntar al API
    .then(data => data.json())
    .then(data => {
        posts = data;
        mostrarDatos(posts)
    })

});

function mostrarDatos(posts) {
    posts.map((post,) => {
        let nombre = document.createElement('h1');
        let frase = document.createElement('p');
         nombre.innerHTML = "nombre : " + post.character;
         frase.innerHTML = "frase : " + post.quote;
         contenedor.appendChild(nombre);
         contenedor.appendChild(frase);

    })
}

