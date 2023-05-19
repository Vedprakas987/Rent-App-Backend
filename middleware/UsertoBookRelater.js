const jwt = require("jsonwebtoken");

const Relater = (req, res, next) => {
  const token = req?.headers?.authorization?.split(" ")[0]
  console.log(token);
  if (token) {
    try {
      const decoded = jwt.verify(token, "ved");
      req.body.userid = decoded.userId;
      console.log(decoded);
      next();
    } catch (error) {
      console.error("Error verifying token:", error);
      res.status(401).json({ error: "Invalid token" });
    }
  } else {
    res.status(401).json({ error: "Token not provided" });
  }
};

module.exports = {
  Relater,
};
