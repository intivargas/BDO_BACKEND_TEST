//Lambda de AWS para resolver el problema planteado en la prueba tecnica de back end.
const testBackEnd  = async (event) => {
  //funcion que calcula la sumatoria del arreglo para definir cual es la capacidad maxima que puede tener el bus
  function Sumatoria(arr) {
    let sumatoria = 0;
    for (let i = 0; i < arr.length; i++) {
      sumatoria += arr[i];
    }
    return sumatoria;
  }
  
  //funcion que se encarga de escanear el arreglo para validar si la capacidad del bus es valida.
  function Scan(arr, bus){
    let condicion = true;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (sum > bus){
        condicion = false;
        break;
      }else if (sum < bus){
        condicion = true;
        continue;
      }else {
        condicion = true;
        sum = 0;
        continue;
      }
      sum += arr[i];
    }
    if ((0 < sum) && (sum < bus)){
      condicion = false;
    }
    return condicion;
  }
  
  //funcion que calcula las capacidades que pueden tener los buses para transportar a las personas.
  function Buses(arr){
    let respuesta = [];
    for (let bus = 1; bus <= Sumatoria(arr); bus++){
      let condicion = Scan(arr,bus);
      if (condicion == true){
        respuesta.push(bus);
      }
    }
    return {"sizes":respuesta.join(",")};
  }
  
  const groups = event.groups.split(",");
  const arr = groups.map(Number);
  let response = Buses(arr);

  return response;
};

export const handler = testBackEnd;