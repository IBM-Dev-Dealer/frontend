export const addProject = async (req, res) => {
  if (req.method === "GET" && req.headers.authorization === "authorization") {
    return res.status(200).json({
      TECHNOLOGIES_DATA_FIELDS_NAMEs,
    });
  }

  return res.status(500).json({ error: "Please authenticate!", logged: false });
};
