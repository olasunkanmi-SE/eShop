module.exports = async (req, res, next) => {
  let user = req.user;
  if (!user.isAdmin) {
    return res.status(403).send("Access denied");
  }
  next();
};
