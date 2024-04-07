import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// GET method

app.get("/", (req, res) => {
  res.send("Hello Word");
});

app.get("/", (req, res) => {
    res.send("Thanks for visiting this page.");
  });
  

app.listen(PORT, () => {
  console.log(`This server is listening on PORT ${PORT}`);
});
