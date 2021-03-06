import axios from "axios";

export default async (req, res) => {
  let parm = JSON.parse(req.body);
  let resp = { status: 0 };
  axios
    .post(
      //process.env.USER_LOGIN_PESERTA +
      process.env.BASE_URL + "/lokasikerja",
      {
        lokasikerja: parm.lokasikerja,
        kordinatx: parm.kordinatx,
        kordinaty: parm.kordinaty,
      }
    )
    .then(function (response) {
      if (response.status == 200) {
        resp.status = 200;
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
