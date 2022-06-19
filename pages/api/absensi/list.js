import axios from "axios";

export default async (req, res) => {
  //   let parm = JSON.parse(req.body);
  let resp = { status: 0 };
  await axios
    .post(process.env.BASE_URL + "/absensi")
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
