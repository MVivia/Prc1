const nombre = prompt ("Ingresa tu nombre:");
const apellido = prompt ("Ingresa tu apellido:");
const edad = prompt ("Ingresa tu edad:");
const lugarNacimineto = prompt ("Ingresa tu lugar de nacimiento:");
const fecha= prompt ("Ingresa fecha de nacimiento:");
const comidaFavorita = prompt ("Ingresa tu comida favorita:");
const carrera = prompt ("Ingresa tu carrera:");
const diaFavorito = prompt ("Ingresa tu dia favorito:");

const lista = document.createElement("ul");

const agregarDato = (etiqueta, valor) =>{
const elementoLista = document.createElement ("li");
elementoLista.innerHTML = `<strong>${etiqueta}:</strong> ${valor}`;
lista.appendChild(elementoLista);
};

agregarDato("Nombre", `${nombre} ${apellido}`);
agregarDato("Edad", edad);
agregarDato("Lugar de nacimiento", lugarNacimineto);
agregarDato("Fecha de nacimiento", fecha);
agregarDato("Comida favorita", comidaFavorita);
agregarDato("Carrera", carrera);
agregarDato("Dia favorito de la semana", diaFavorito);

const resultadoDiv = document.createElement("div");
resultadoDiv.appendChild(lista);

document.body.appendChild(resultadoDiv);