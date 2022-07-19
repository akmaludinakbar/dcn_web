import axios from "axios";

export default async (req, res) => {
  let parm = JSON.parse(req.body);
  let resp = { status: 0 };
  console.log(process.env.BASE_URL + `/listupload/${parm.id}/${parm.url}`);
  axios
    .delete(
      //process.env.USER_LOGIN_PESERTA +
      process.env.BASE_URL + `/listupload/${parm.id}/${parm.url}`
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
      //   resp.status = error.response.status;
      res.json(JSON.stringify(resp));
    });
};
