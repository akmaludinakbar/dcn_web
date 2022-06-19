import axios from "axios";
const formidable = require("formidable"),
  fs = require("fs"),
  path = require("path"),
  FormData = require("form-data");
export default async (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    const formData = new FormData();
    console.log(
      fs.createReadStream(path.join(__dirname, files.file.originalFilename))
    );
    formData.append(
      "file",
      fs.createReadStream(path.join(__dirname, files.file.originalFilename))
    );
    const options = {
      method: "POST",
      body: formData,
      // If you add this, upload won't work
      // headers: {
      //   'Content-Type': 'multipart/form-data',
      // }
    };
    await fetch("http://api.dinarcahayanegara.com/upload", options).then(
      function (res) {
        console.log("kesinsi");
        console.log(res);
        // if (res.ok) {
        //   alert("Perfect! ");
        // } else if (res.status == 401) {
        //   alert("Oops! ");
        // }
      },
      function (e) {
        console.log(e);
      }
    );
  });
};
export const config = {
  api: {
    bodyParser: false,
  },
};
