const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
// multer init
const upload = multer({ dest: `uploads/` });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// route declare
app.post("/api/file", upload.single("img"), (req, res) => {
  // console.log(req.file);

  if (!req.file) {
    return res.send({ code: 500, msg: "No file upload" });
  } else {
    return res.send({ code: 200, msg: "Upload success" });
  }
});

// listen app
app.listen(5000, () => {
  console.log(`Server is running at port not 5000`);
});
