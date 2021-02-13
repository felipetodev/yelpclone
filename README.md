Aplicación web basada en la pagina web yelp.com, la cual tiene por objetivo, poder buscar tiendas, ya sean de comida, barberías, etc. Entregando sus detalles, direcciones, estándar de precio, horarios, aperturas, etc.
## ¿Cómo lo ejecuto en local? 

Necesitarás tener instalado `Node.js` a partir de la versión 12 y tener acceso a una terminal para seguir los siguientes pasos: 

``` 

npm install # instalar las dependencias 

npm run start # levantar el entorno de desarrollo 

El proyecto tiene Token de verificación los cuales deberás ingresar dentro de un environment file ".env" con la siguiente línea:

REACT_APP_API_KEY="TU API KEY YELP" 

La puedes conseguir registrándote en: https://www.yelp.com/developers/v3/manage_app

⚠️ NOTA: IMPORTANTE

Si tienes problemas consultando la data en nuestra aplicación, haz lo siguiente:

Una vez añadida tu API_KEY, debes solicitar acceso en el siguiente link ¹, clickeando en el botón:

👉 'Request temporary access to the demo server' 👈

https://cors-anywhere.herokuapp.com/corsdemo ¹

Esto evitara que tengamos problemas de CORS al consultar la API de yelp.

``` 

## Librerías Utilizadas 

- [x] 🔹 React JS 
- [x] 🔹 Redux 
- [x] 🔹 Redux-Thunk 
- [x] 🔹 ~~Axios~~ Fetch
- [x] 🔹 Sass 

## Próximas características 

- [x] 🔹 Geolocalización ✔️
- [x] 🔹 Modo oscuro ✔️
- [x] 🔹 Paginación ✔️
- [x] 🔹 Filtrar por $ / Tipo de entrega / etc. 