import axios from "axios";

export default async (req, res) => {
  let parm = JSON.parse(req.body);
  let resp = { status: 0 };
  console.log(process.env.BASE_URL + `/gaji/${req.query.id}`, parm);
  axios
    .put(process.env.BASE_URL + `/gaji/${req.query.id}`, parm)
    .then(function (response) {
      //   console.log(response);
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
