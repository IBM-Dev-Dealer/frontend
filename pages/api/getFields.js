import { ALL_FIELDS } from "./mock/addProjectMock";

const getFields = async (req, res) => {
  if (req.method === "GET" && req.headers.authorization === "authorization") {
    const queryParamKeys = Object.keys(req.query);

    if (queryParamKeys.includes("fields")) {
      const fields = {};

      req.query.fields.forEach((paramKey) => {
        const foundField = ALL_FIELDS.find((field) => field.codename === paramKey);
        if (foundField) fields[foundField.codename] = foundField;
      });
      return res.status(200).json({ fields });
    }
  }

  return res.status(500).json({ error: "Please authenticate!", logged: false });
};
export default getFields;
