//  URL  de la APi

const API = "https://rickandmortyapi.com/api/character"

//  Obtener resultado de API
const getData = (api) => {
    return fetch(api)
        .then((response) => response.json())
        .then((json) => {
            llenarDatos(json);
        })
        .catch((error) => {
            console.log("Error :", error)
        })
}

const llenarDatos = (data) => {
    let html = "";
    data.results.forEach((pj) => {
        html += '<div class="col-2 mx-2 my-3">';
        html += '<div class="card myCard p-2" style="width: 12rem;">';
        html += `<img src="${pj.image}" class="card-img-top img-thumbnail">`
        html += `<h5 class="card-title">Nombre: ${pj.name}</h5>`
        html += `<p class="card-text">Estado: ${pj.status}  </p>`;
        html += `<p class="card-text">Especie: ${pj.species}  </p>`;
        html += `<p class="card-text">Genero: ${pj.gender}  </p>`;
        /* html += `<p class="card-text">${pj.}  </p>`; */
        html += '</div>';
        html += '</div>';
        html += '</div>';

    });
    document.getElementById('datosPersonajes').innerHTML=html;
}

getData(API);