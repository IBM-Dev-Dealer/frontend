import { PROJECTS } from "./mock/feedbackMock";

// const getProjectsWithoutFeedback = async (req, res) => {
//   if (req.method === "GET" && req.headers.authorization === "authorization") {
//     return res.status(200).json({ projects: PROJECTS });
//   }

//   return res.status(500).json({ error: "Please authenticate!", logged: false });
// };

const getProjectsWithoutFeedback = () => {
  return { projects: PROJECTS };
};
export default getProjectsWithoutFeedback;
