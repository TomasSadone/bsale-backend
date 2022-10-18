const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500;
const mysql = require("mysql2");
const {
  getCategories,
  getProducts,
  getProductsBySearch,
  getProductsInCategory,
} = require("./operations-pool");

const cors = require("cors");
const handleConnect = require("./helpers/handleConnect");
const config = require("./config/dbConfig");
app.use(cors());

const pool = mysql.createPool(config);

handleConnect();

app.get("/", (req, res) => {
  return res.json("hello world");
});
app.get("/categories", (req, res) => {
  try {
    getCategories(pool, result => {
      res.json(result);
    });
  } catch (error) {
    throw new Error(error);
  }
});

app.get("/products", (req, res) => {
  try {
    getProducts(pool, result => {
      res.json(result);
    });
  } catch (error) {
    throw new Error(error);
  }
});

app.get("/category/:categoryId", (req, res) => {
  try {
    getProductsInCategory(req?.params?.categoryId, pool, result => {
      res.json(result);
    });
  } catch (error) {
    throw new Error(error);
  }
});

app.get("/search/:id", (req, res) => {
  try {
    getProductsBySearch(req?.params?.id, pool, result => {
      res.json(result);
    });
  } catch (error) {
    throw new Error(error);
  }
});

app.all("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
