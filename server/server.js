require("dotenv").config();
const express = require("express");
const db = require("./db/index.js");
const morgan = require("morgan");

const app = express();

app.use(express.json());

// Get all Resturants
app.get("/api/v1/resturants", async (req, res) => {
  try {
    const results = await db.query("select  * from resturants");
    console.log(results);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        resturants: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Get a Resturant
app.get("/api/v1/resturants/:id", async (req, res) => {
  try {
    const results = await db.query("select * from resturants where id = $1 ", [
      req.params.id,
    ]);

    res.status(200).json({
      status: "succes",
      data: {
        resturant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Create a Resturant

app.post("/api/v1/resturants", async (req, res) => {
  console.log(req.body);
  try {
    const results = await db.query(
      "INSERT INTO resturants(name, location, price_range) values ($1, $2, $3) returning *",
      [req.body.name, req.body.location, req.body.price_range]
    );
    console.log(results);
    res.status(201).json({
      status: "succes",
      data: {
        resturant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Update Resturants

app.put("/api/v1/resturants/:id", async (req, res) => {
  try {
    const results = await db.query(
      " UPDATE resturants SET name= $1, location =$2, price_range =$3 where id=$4 returning *",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );
    res.status(200).json({
      status: "succes",
      data: {
        resturant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }

  console.log(req.params.id);
  console.log(req.body);
});

// Delete a Resturant
app.delete("/api/v1/resturants/:id", async (req, res) => {
  try {
    const results = await db.query(
      "DELETE FROM resturants where id = $1 returning *",
      [req.params.id]
    );
    res.status(204).json({
      status: "succes",
    });
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
