import { ALL_FIELDS } from "./mock/addProjectMock";

export const getFields = async (queryFields) => {
  // console.log("queryFields", queryFields);
  const fields = {};

  queryFields.forEach((paramKey) => {
    const foundField = ALL_FIELDS.find((field) => field.codename === paramKey);
    if (foundField) fields[foundField.codename] = foundField;
  });

  return { fields };
};

const getFieldsExternal = async (req, res) => {
  if (req.method === "GET" /* && req.headers.authorization === "authorization" */) {
    const queryParamKeys = Object.keys(req.query);

    if (queryParamKeys.includes("fields")) {
      const fields = getFields(req.query.fields);
      // console.log("fields", fields);

      return res.status(200).json(JSON.stringify(fields));
    }
  }

  return res.status(500).json({ error: "Please authenticate!", logged: false });
};

export default getFieldsExternal;
