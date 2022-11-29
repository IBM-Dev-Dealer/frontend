import { DEV_DATA } from "./mock/feedbackMock";

const getDevData = async (req, res) => {
  if (req.method === "GET" && req.headers.authorization === "authorization") {
    return res.status(200).json({ devData: DEV_DATA });
  }

  return res.status(500).json({ error: "Please authenticate!", logged: false });
};
export default getDevData;
