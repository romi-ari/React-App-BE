const axios = require("axios");
const jwt = require("jsonwebtoken");
const { userGoogle } = require("../../../models");
const JWT_SIGNATURE_KEY  = process.env;

function createToken(user) {
  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  return jwt.sign(payload, JWT_SIGNATURE_KEY);
}

async function handleGoogleLoginOrRegister(req, res) {
  const { accessToken } = req.body;
  const options = { headers: { Authorization: `Bearer ${accessToken}` } };

  try {
    const response = await axios.get(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      options
    );
    const { id, email, name } = response.data;

    let user = await userGoogle.findOne({ where: { googleId: id } });
    if (!user) user = await userGoogle.create({ email, name });

    const accessToken = createToken(user);

    res.status(201).json({ accessToken });
  } catch (err) {
    res.status(401).json({ error: { name: err.name, message: err.message } });
  }
}

module.exports = handleGoogleLoginOrRegister;
