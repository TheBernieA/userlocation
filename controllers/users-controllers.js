const uuid = require("uuid");

const DUMMY_USERS = [
  {
    id: "u1",
    name: "User1",
    email: "test@test.com",
    password: "123456",
  },
];

const getUsers = (req, res) => {
  res.json({ users: DUMMY_USERS });
};

const login = (req, res) => {
  const { email, password } = req.body;
  const identifiedUser = DUMMY_USERS.find((user) => user.email === email);
  if (!identifiedUser) {
    throw new Error("User not found");
  }
  res.json({ message: "logged" });
};

const signup = (req, res) => {
  const { name, email, password } = req.body;
  const createdUser = {
    id: uuid.v4(),
    name,
    email,
    password,
  };
  DUMMY_USERS.push(createdUser);
  res.status(201);
};

exports.getUsers = getUsers;
exports.login = login;
exports.signup = signup;
