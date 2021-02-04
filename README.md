Aplicación web basada en la pagina web yelp.com, la cual tiene por objetivo, poder buscar tiendas, ya sean de comida, barberías, etc. Entregando sus detalles, direcciones, estándar de precio, horarios, aperturas, etc.
## ¿Cómo lo ejecuto en local? 

Necesitarás tener instalado `Node.js` a partir de la versión 12 y tener acceso a una terminal para seguir los siguientes pasos: 

``` 

npm install # instalar las dependencias 

npm run start # levantar el entorno de desarrollo 

El proyecto tiene Token de verificación los cuales deberás ingresar dentro de un environment file ".env" con la siguiente línea:

REACT_APP_API_KEY="TU API KEY YELP" 

La puedes conseguir registrándote en: https://www.yelp.com/developers/v3/manage_app

``` 

## Librerías Utilizadas 

- [x] 🔹 React JS 
- [x] 🔹 Redux 
- [x] 🔹 Redux-Thunk 
- [x] 🔹 Axios 
- [x] 🔹 Sass 

## Próximas características 

- [x] 🔹 Geolocalización 
- [x] 🔹 Modo oscuro 
- [x] 🔹 Filtrar por $ / Tipo de entrega / etc. 