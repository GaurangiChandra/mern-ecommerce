import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Gaurangi Chandra",
    email: "gaurangi@example.com",
    password: bcrypt.hashSync("123456", 10),
  },

  {
    name: "Turanya Chandra",
    email: "turanya@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
