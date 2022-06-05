import axios from "axios";

export default async (req, res) => {
  // let parm = JSON.parse(req.body);
  let resp = { status: 0 };
  axios
    .post(
      //process.env.USER_LOGIN_PESERTA +
      "http://api.dinarcahayanegara.com/login",
      {
        nama: "tes",
        password: "tes",
      }
    )
    .then(function (response) {
      if (response.status == 200) {
        resp.data = response.data;
        res.json(JSON.stringify(resp));
      } else {
        resp.status = response.status;
        res.json(JSON.stringify(resp));
      }
    })
    .catch(function (error) {
      resp.status = error.response.status;
      res.json(JSON.stringify(resp));
    });
};
