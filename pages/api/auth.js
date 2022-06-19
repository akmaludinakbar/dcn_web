import fetch from "node-fetch";

export default async (req, res) => {
  const { token } = req.body;
  let resp = { status: false };
  const bearer = `Bearer ${token}`;
  var url = "http://localhost:8090/checksession";
  const result = await fetch(url, {
    method: "POST",
    headers: { Authorization: bearer },
  });

  const data = await result;
  resp.status = data.status == 200 ? true : false;
  // console.log(data);
  res.json(resp);
};
