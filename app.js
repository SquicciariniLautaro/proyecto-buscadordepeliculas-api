// API KEY

const apiKEY = "77751f646e2f9629e4750cc9e65dffd5";

// Variables del HTML

const btnEnviar = document.getElementById("search-btn");

const buscador = document.getElementById("movie-input");

const gridPeliculas = document.getElementById("movies-grid");

// Funcion para la busqueda de peliculas

async function buscarPelicula () {

    try{

        const peliABuscar = buscador.value;

        if(peliABuscar === ""){
            
            Swal.fire({
                        title: "¡Atención!",
                        text: "Por favor, escribe una pelicula...",
                        icon: "warning", 
                        confirmButtonColor: "#e50914" 
                        });
            return;
        };

        gridPeliculas.innerHTML = "Cargando peliculas..."

        buscador.value = "";

        const url = `https://api.themoviedb.org/3/search/movie?query=${peliABuscar}&api_key=${apiKEY}`;

        const respuesta = await fetch (url);

        const datos = await respuesta.json();

        gridPeliculas.innerHTML = "";

        const peliculas = datos.results;

        if(peliculas.length === 0){

            gridPeliculas.innerHTML = `
            <h3>No se encontraron peliculas con ese titulo</h3>
            `
        }else{
            peliculas.forEach((pelicula) => {

            const tarjeta = document.createElement("div");

            tarjeta.classList.add("movie-card");

            let rutaDelPoster;

            if(pelicula.poster_path === null){

                rutaDelPoster = "https://placehold.co/500x750/141414/e50914.png?text=Sin+Poster";
            }else{

                rutaDelPoster =`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;
            }

            tarjeta.innerHTML = `
            <img src="${rutaDelPoster}" alt="${pelicula.title}">
            <h3>${pelicula.title}</h3>
            <p>${pelicula.overview}</h3>
            <small>Fecha de estreno: ${pelicula.release_date}</h3>
            `;

            gridPeliculas.appendChild(tarjeta);
        });
        };

    }catch(error){

        console.log("Hubo un error:", error);

    };
};

// Evento para el boton de buscar

btnEnviar.addEventListener("click", () => {
    buscarPelicula();
});

buscador.addEventListener("keydown", (e) =>{
    if(e.key === "Enter"){
        e.preventDefault();
        buscarPelicula();
    };
});