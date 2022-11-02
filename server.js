const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;
const mysql = require('mysql2');
const cors = require('cors');
const handleConnect = require('./helpers/handleConnect');
const config = require('./config/dbConfig');

//routes handler functions:
const { categoriesRouteWrapper } = require('./routes/categories');
const { productsRouteWrapper } = require('./routes/products');
const { searchRouteWrapper } = require('./routes/search');
const { categoryRouteWrapper } = require('./routes/category');

//make it a public API:
app.use(cors());

//initialize and mantain connection to DB:
handleConnect();

//initialize pool connection needed to handle connections efficiently:
const pool = mysql.createPool(config);

//Handle routes:
app.get('/', (req, res) => {
  return res.json('hello world');
});
// functions passed as second argument on .use recieve a conection pool and return a router
app.use('/categories', categoriesRouteWrapper(pool));

app.use('/products', productsRouteWrapper(pool));

app.use('/category', categoryRouteWrapper(pool));

app.use('/search', searchRouteWrapper(pool));

app.all('*', (req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
