# bsale-backend

API creado para el challenge de desarrollador en BSALE. El lenguaje utilizado es JavaScript, acompañado por Node.js y express para crear un backend eficiente.

Este API consume información de una base de datos SQL, que tiene categorías y productos para un eCommerce. 
El objetivo es que el desarrollador front-end pueda de manera simple hacer la petición y obtener los datos deseados.

¿CÓMO USAR ESTE API?

El url del endpoint es: https://bsale-api.onrender.com, sin embargo, tenemos que agregar
más información en nuestra petición GET para que esta dirección nos devuelva la información que queremos.
Usar este API es bien simple, tenemos 4 rutas que se van a explicar una por una:


- Pedir todas las categorías:
https://bsale-api.onrender.com/categories

Este endpoint nos va a devolver todas las categorías de productos que se encuentran en la base de datos del eCommerce.

- Pedir todos los productos:
https://bsale-api.onrender.com/products

Este endpoint nos va a devolver todos los productos que se encuentran en la base de datos del eCommerce.

- Pedir todos los productos dentro de una categoría:
https://bsale-api.onrender.com/category/:categoryId

El parámetro :categoryId es un número propio de cada categoría, que podemos obtener cuando pedimos la información de las categorías.

Este endpoint nos va a devolver todos los productos que se encuentran en la categoría cuyo id con el id que enviamos.

- Pedir productos por búsqueda de nombre:
https://bsale-api.onrender.com/search/:id

El parámetro :id es el texto que queremos buscar dentro de los nombres de todos los productos de la base de datos.
