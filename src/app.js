const appRoot = document.getElementById('appRoot');

let personaA = {
    nombre:'Pedro',
    edad: 20,
    ciudad: 'Tarragona'
};


const sumar = (e) =>{
    personaA.edad += 1;
    console.log(personaA.edad)
    render()
    
}

const restar = (e) =>{
    personaA.edad -= 1;
    render()
}

const reset = (e) =>{
    personaA.edad = 20;
    render()
}

// Podemos introducir contenido, pero siempre debe haber un padre
let template = <p>Bienvenido a Reach, hijo de puta</p>;
let array = ['pedro','juan','luque']

    // Esto da error
   // template = <p>Bienvenido a Reach, hijo de puta</p> <p>Bienvenido a Reach, hijo de puta</p>;  // Aqui dar error

   // Esta opcion funciona, pero legiblemente es un desastre
   // template = <div><p>Bienvenido a Reach, hijo de puta</p>; <p>Bienvenido a Reach, hijo de puta</p>; </div> 

    // Otra alternativa, legiblemente mas agradable
let render = () =>{
    template = (
        <div>
            <p>{personaA.nombre}</p>
            <p>{personaA.edad}</p>
            <p>{array}</p>
            
            <button onClick={sumar}>+1</button>
            <button onClick={restar}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    )
    ReactDOM.render(template, appRoot);
}
    

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
