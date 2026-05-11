//protect:----- according to the token for particular roles[user,admin],we will
//authorize(RBAC=Role-Based Access Control):----- we will check with role using includes
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Access token missing or invalid format. Use 'Bearer <token>'" });
    }

    const accessToken = authHeader.split(" ")[1];
    if (!accessToken) {
      return res.status(401).json({ message: "Token not found after Bearer" });
    }

    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password -refreshToken");
    if (!user) return res.status(401).json({ message: "User not found" });

    req.user = user;
    next(); //if u r using next()---the page will get reloads when ,passing control to the upcoming functions... 
  } catch (error) {
    // Distinguish expired vs invalid
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Access token expired. Please refresh." });
    }
    console.error("Token verification error:", error.message);
    return res.status(401).json({ message: "Invalid access token", error: error.message });
  }
};

exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
};