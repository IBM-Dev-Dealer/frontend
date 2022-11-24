// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  return res.status(200).json({
    logged: false,
  });
};
