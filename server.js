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

// let connection;
const config = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  database: process.env.DATABASE,
};
// const handleDisconnect = () => {
//   connection = mysql.createConnection(config); // Recreate the connection, since
//   // the old one cannot be reused.

//   connection.connect(function (err) {
//     // The server is either down
//     if (err) {
//       // or restarting (takes a while sometimes).
//       console.log("error when connecting to db:", err);
//       setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
//     } // to avoid a hot loop, and to allow our node script to
//     console.log("connected to db");
//   }); // process asynchronous requests in the meantime.
//   // If you're also serving http, display a 503 error.
//   connection.on("error", function (err) {
//     console.log("db error", err);
//     if (err.code === "PROTOCOL_CONNECTION_LOST" || err.code === "ENOTFOUND") {
//       // Connection to the MySQL server is usually
//       handleDisconnect(); // lost due to either server restart, or a
//     } else {
//       //   // connnection idle timeout (the wait_timeout
//       throw err; // server variable configures this)
//     }
//   });
// };
// handleDisconnect();

const connection = mysql.createConnection(config);
const pool = mysql.createPool(config);

connection.connect(err => {
  if (err) {
    console.log(err, "error");
    throw err;
  }
  console.log("conected to database");
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
