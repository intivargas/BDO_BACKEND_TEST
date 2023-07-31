# BDO_BACKEND_TEST
Este desarrollo tiene cómo finalidad dar solución al problema planteado en la prueba técnica para el cargo de desarrollador Backend.

A continuación se expone el roblema:

Hay n grupos de amigos y cada grupo es numerado de 1 a n, el ith grupo contiene ai personas. 
Todos viven cerca de una parada de bus, y sólo un bus funciona en esa ruta, el bus vacío llega a la parada y todos los grupos quieren viajar en ese bus.
Sin embargo, cada grupo de amigos no quiere separarse. Así que entran al bus sólo si el bus puede llevar a todo el grupo.

Además, los grupos no quieren cambiar su posición relativa mientrsa viajan. En otras palabras, el grupo 3 no puede viajar en el bus, amenos que el grupo 1 y el grupo 2 ya hayan viajado, adicionalmente es necesario que todos estén sentados dentro del autobus en este momento, lo que quiere decir que un bus de capacidad x sólo puede transportar x personas simultaneamente.

Encuentre todos los posibles tamaños de x del bus para que pueda transportar a todos los grupos, cumpliendo con las condiciones anteriores y cada vez que el bus salga de la estación, no haya sillas vacías en el bus (es decir, el número total de personas presentes dentro del bus es igual a x).

Ejemplo de un Request:
{
  "groups":"1,2,1,1,1,2,1,3"
}

Ejemplo de un Response:
{
  "sizes":"3,4,6,12"
}

El desarrollo se realizó utilizando una funcion AWS Lambda hecha en Node.js, la cuál se encuentra en el repositorio con el nombre index.mjs.

Y está expuesta como Api REST a través del servicio AWS Api Gateway.

API GATEWAY Link:
https://2n8xk0xkz4.execute-api.us-east-2.amazonaws.com/test/test-backend
