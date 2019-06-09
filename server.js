const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes

app.get("/api", (req, res) => {
  res.send("This will be the home of our API. :)");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
