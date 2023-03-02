const validateUserAuth = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "Something went wrong inside auth-request-validators",
      err: "Email or password missing in the signup request",
    });
  }
  next();
};

const validateIsAdminRequest = (req, res, next) => {
  if (!req.body.id) {
    return res.status(400).json({
      success: false,
      data: {},
      err: "User id not given",
      message: "Something went wrong inside auth-request-validators",
    });
  }
  next();
};

module.exports = {
  validateUserAuth,
  validateIsAdminRequest,
};
