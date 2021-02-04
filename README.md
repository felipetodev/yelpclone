Aplicación web basada en la pagina web yelp.com, la cual tiene por objetivo, poder buscar tiendas, ya sean de comida, barberias, etc. Entregando sus detalles, direcciones, estandar de precio, horarios, aperturas, etc.

## ¿Cómo lo ejecuto en local?

Necesitarás tener instalado `Node.js` a partir de la versión 12 y tener acceso a una terminal para seguir los siguientes pasos:

```
npm install # instalar las dependencias
npm run start # levantar el entorno de desarrollo

El proyecto tiene Token de verificacion los cuales deberas ingresar dentro de un environment file ".env" con la siguiente linea:

REACT_APP_API_KEY="TU API KEY YELP"

La puedes conseguir registrandote en: https://www.yelp.com/developers/v3/manage_app

## Librerias Utilizadas

- [x] 🔹 React JS
- [x] 🔹 Redux
- [x] 🔹 Redux-Thunk
- [x] 🔹 Axios
- [x] 🔹 Sass

## Próximas características

- [x] 🔹 Geolocalización
- [x] 🔹 Modo oscuro
- [x] 🔹 Filtrar por $ / Tipo de entrega / etc.