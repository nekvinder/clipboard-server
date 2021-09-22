const screenshot = require("screenshot-desktop");
const express = require("express");
const app = express();
const fs = require("fs");

const port = 8082;

app.listen(port, () => {
  console.log("screen on " + port);
});

app.get("/", async (req: any, res: any) => {
  try {
    await screenshot({ filename: "images/demo.png" });
  } catch (error) {
    console.log(12, error);
  }
  var img = fs.readFileSync("images/demo.png");
  res.writeHead(200, { "Content-Type": "image/gif" });
  res.end(img, "binary");
});
