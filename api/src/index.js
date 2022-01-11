const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");
const cors = require("cors");

const uploadFileMiddleware = multer(uploadConfig("./tmp"));

const app = express();

app.use(cors());

app.post(
  "/upload",
  uploadFileMiddleware.single("file"),
  (request, response) => {
    const { file } = request;

    console.log(file);

    response.send();
  }
);

app.listen(3333, () => console.log("Server is listening on port 3333!"));
