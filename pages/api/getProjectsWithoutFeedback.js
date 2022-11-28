import { PROJECTS } from "./mock/feedbackMock";

const getFields = async (req, res) => {
  if (req.method === "GET" && req.headers.authorization === "authorization") {
    return res.status(200).json({ projects: PROJECTS });
  }

  return res.status(500).json({ error: "Please authenticate!", logged: false });
};
export default getFields;
