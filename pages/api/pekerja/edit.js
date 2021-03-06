import axios from "axios";

export default async (req, res) => {
  let parm = JSON.parse(req.body);
  let resp = { status: 0 };
  axios
    .put(
      //process.env.USER_LOGIN_PESERTA +
      process.env.BASE_URL + `/pekerja/${parm.id}`,
      {
        nama: parm.nama,
        nomor_telepon: parm.nomor_telepon,
        id_lokasi_kerja: parm.id_lokasi_kerja,
        tgl_lahir: parm.tgl_lahir,
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
