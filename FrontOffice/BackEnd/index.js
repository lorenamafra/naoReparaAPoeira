const express = require("express");
const app = express();
const port = "8081";

app.listen(port, (req, res) => {
  console.log(`Server listening to port ${port}, FRONT OFFICE!`);
});
