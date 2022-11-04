# bsale-backend

## Explicación del ejercicio:

API creado para el challenge de desarrollador en BSALE. El lenguaje utilizado es JavaScript, acompañado por Node.js y Express.js para crear un backend eficiente.

Este API consume información de una base de datos SQL, que tiene categorías y productos para un eCommerce. 
El objetivo es que sea escalable, simple, y segura, y que el desarrollador front-end pueda de manera simple hacer la petición y obtener los datos deseados.

### La estructura utilizada es:
- Un sistema de manejo de rutas en server.js, donde se manejen todos los tipos de peticiones

- Un archivo para cada ruta en la carpeta routes, que toma los parámetros necesarios y maneja las peticiones con la función correspondiente para cada subruta y tipo de petición (en este caso solo tenemos oeticiones GET, pero si tendríamos que modificar la db, esta misma estructura nos permitiría escalar el proyecto fácilmente).

- Cada ruta tiene su controller, con la query correspondiente para cada una de las peticiones. Esto trabaja en conjunto con las routes, para facilitar la escalabilidad del proyecto.

- El proyecto cuenta tambien con algunas otras cosas como archivos de configuracion, o helper functions para realizar procesos que se repiten multiples veces durante el proceso de uso.


## ¿CÓMO USAR ESTE API?

El url del endpoint es: https://bsale-api.onrender.com, sin embargo, tenemos que agregar
más información en nuestra petición GET para que esta dirección nos devuelva la información que queremos.
Usar este API es bien simple, tenemos 4 rutas que se van a explicar una por una:


### - Pedir todas las categorías:
(GET) https://bsale-api.onrender.com/categories

Este endpoint nos va a devolver todas las categorías de productos que se encuentran en la base de datos del eCommerce.

Ejemplo de respuesta:
```
[
  {
    "id": 1,
    "name": "bebida energetica"
  },
]
```
### - Pedir todos los productos:
(GET) https://bsale-api.onrender.com/products

Este endpoint nos va a devolver todos los productos que se encuentran en la base de datos del eCommerce.

Ejemplo de respuesta:
```
[
  {
    "id": 5,
    "name": "ENERGETICA MR BIG",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
    "price": 1490,
    "discount": 20,
    "category": 1
  },
]  
```

### - Pedir todos los productos dentro de una categoría:
(GET) https://bsale-api.onrender.com/category/:categoryId

El parámetro :categoryId es un número propio de cada categoría, que podemos obtener cuando pedimos la información de las categorías.

Este endpoint nos va a devolver todos los productos que se encuentran en la categoría cuyo id coincida con el id que enviamos.

Ejemplo de respuesta:
```
[
  {
    "id": 5,
    "name": "ENERGETICA MR BIG",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
    "price": 1490,
    "discount": 20,
    "category": 1
  },
]  
```

### - Pedir productos por búsqueda de nombre:
(GET) https://bsale-api.onrender.com/search/:id

El parámetro :id es el texto que queremos buscar dentro de los nombres de todos los productos de la base de datos.

Ejemplo de respuesta:
```
[
  {
      "id": 23,
      "name": "RON BACARDI AÑEJO",
      "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/bacardi9450.jpg",
      "price": 4990,
      "discount": 0,
      "category": 3
    },
]
```
