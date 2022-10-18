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

require("dotenv").config();

const cors = require("cors");
app.use(cors());

const config = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  database: process.env.DATABASE,
};

let connection;
const pool = mysql.createPool(config);

const handleDisconnect = () => {
  connection = mysql.createConnection(config);
  connection.connect(err => {
    if (err) {
      console.log(err, "error");
      setTimeout(handleDisconnect, 2000);
      throw err;
    } else {
      console.log("conected to database");
    }
  });
};
handleDisconnect();

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

module.exports = { handleDisconnect };
