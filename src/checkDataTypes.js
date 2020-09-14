exports.dataType = (req, res, next) => {
    const { num1, num2 } = req.body;
    if (typeof num1 === "string" || typeof num2 === "string") {
      return res.json({
        status: `error`,
        message: "Invalid data types",
      });
    }
    next();
  };