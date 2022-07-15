import axios from "axios";

export default async (req, res) => {
  let parm = JSON.parse(req.body);

  let resp = { status: 0 };
  axios
    .post(process.env.BASE_URL + "/gaji", parm)
    .then(function (response) {
      console.log(response.status);
      if (response.status == 200) {
        resp.status = response.data.status == "ERROR" ? 0 : 200;
        resp.data = response.data;
        res.json(JSON.stringify(resp));
      } else {
        resp.status = response.status;
        res.json(JSON.stringify(resp));
      }
    })
    .catch(function (error) {
      console.log(error);
      resp.status = error.response.status;
      res.json(JSON.stringify(resp));
    });
};
