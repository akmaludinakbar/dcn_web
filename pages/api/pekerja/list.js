import axios from "axios";

export default async (req, res) => {
  let parm = JSON.parse(req.body);
  let resp = { status: 0 };
  axios
    .post(
      //process.env.USER_LOGIN_PESERTA +
      `http://localhost:8090/absensi`,
      {
        nama: parm.nama,
        tanggal_masuk: parm.tanggal_masuk,
        tanggal_keluar: parm.tanggal_keluar,
        tempat_kerja: parm.tempat_kerja,
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
      console.log(error);
      resp.status = 999;
      res.json(JSON.stringify(resp));
    });
};
