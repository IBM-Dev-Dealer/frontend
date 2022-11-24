// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method === "GET" && req.headers.authorization === "authorization") {
    return res.status(200).json({
      client: {
        name: "Coca cola",
        logo: "https://purepng.com/public/uploads/large/purepng.com-coca-cola-logologobrand-logoiconslogos-251519939746cjaoy.png",
        project: "Save Africa with coke",
        startDate: "11.02.2019",
        endDate: "20.12.2024",
      },
      technologies: [],
      developers: [],
      repos: [],
      slackChannels: [],
      accessZone: [],
      tutorials: [],
      logged: true,
    });
  }

  return res.status(500).json({ error: "Please authenticate!", logged: false });
};
