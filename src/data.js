import data from './data/ghibli/ghibli.js';
// *******Esta función filtra la data por director*******
export function filtrarDirector(event){
  const filtrarData = data.films.filter(function(datoDirector){
    return datoDirector.director === event.target.value;
  });
  console.log(filtrarData);
}
/* sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. El primer parámetro,
 data, nos entrega los datos.
El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. 
El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente. */


/* computeStats(data): la función compute o calcular, nos permitirá hacer cálculos estadísticos básicos para
 ser mostrados de acuerdo a la data proporcionada.*/
