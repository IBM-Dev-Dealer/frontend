import logout from "./logout";

// // eslint-disable-next-line import/no-anonymous-default-export
// export default async (req, res) => {
//   if (req.method === "GET" && req.headers.authorization === "authorization") {
//     return res.status(200).json({
//       logged: true,
//       logout: async () => await fetch("http://localhost:3000/api/logout"),
//       isPM: false,
//       error: false,
//     });
//   }
//   return res.status(500).json({ error: "Please authenticate!", logged: false });
// };

const login = async () => ({
  logged: true,
  logout,
  isPM: false,
  error: false,
});

export default login;
