require("dotenv").config();
const express = require("express");
const db = require("./db/index.js");
const morgan = require("morgan");

const app = express();

app.use(express.json());
// Get all Resturants

app.get("/api/v1/resturants", async (req, res) => {
  const results = await db.query("select  * from resturants");
  console.log("results");
  res.status(202).json({
    status: "success",
    data: {
      resturant: ["singh burger", "trukey king", "jalaba"],
    },
  });
});

// Get a Resturant
app.get("/api/v1/resturants/:id", (req, res) => {
  console.log(req.params);
  res.status(200).json({
    status: "succes",
    data: {
      resturant: "mcdonalds",
    },
  });
});

// Create a Resturant

app.post("/api/v1/resturants", (req, res) => {
  console.log(req.body);
  res.status(201).json({
    status: "succes",
    data: {
      resturant: "mcdonalds",
    },
  });
});

// Update Resturants

app.put("/api/v1/resturants/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.status(200).json({
    status: "succes",
    data: {
      resturant: "mcdonalds",
    },
  });
});

// Delete a Resturant
app.delete("/api/v1/resturants/:id", (req, res) => {
  res.status(204).json({
    status: "succes",
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
