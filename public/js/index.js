'use strict';

var appRoot = document.getElementById('appRoot');

var personaA = {
    nombre: 'Pedro',
    edad: 20,
    ciudad: 'Tarragona'
};

var sumar = function sumar(e) {
    personaA.edad += 1;
    console.log(personaA.edad);
    render();
};

var restar = function restar(e) {
    personaA.edad -= 1;
    render();
};

var reset = function reset(e) {
    personaA.edad = 20;
    render();
};

// Podemos introducir contenido, pero siempre debe haber un padre
var template = React.createElement(
    'p',
    null,
    'Bienvenido a Reach, hijo de puta'
);
var array = ['pedro', 'juan', 'luque'];

// Esto da error
// template = <p>Bienvenido a Reach, hijo de puta</p> <p>Bienvenido a Reach, hijo de puta</p>;  // Aqui dar error

// Esta opcion funciona, pero legiblemente es un desastre
// template = <div><p>Bienvenido a Reach, hijo de puta</p>; <p>Bienvenido a Reach, hijo de puta</p>; </div> 

// Otra alternativa, legiblemente mas agradable
var render = function render() {
    template = React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            personaA.nombre
        ),
        React.createElement(
            'p',
            null,
            personaA.edad
        ),
        React.createElement(
            'p',
            null,
            array
        ),
        React.createElement(
            'button',
            { onClick: sumar },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: restar },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );
    ReactDOM.render(template, appRoot);
};

// Renderiza en la web lo que queremos
render();

// let templateB = (
//     <div>
//         <h1>{personaA.name}</h1>
//     </div>
// )


// let templateC = (
//     <div>
//         <h1>{personaA.edad}</h1>
//     </div>
// )

// Ejercicio con OpenWeather , obtener los datos del tiempo en una zona con axios
