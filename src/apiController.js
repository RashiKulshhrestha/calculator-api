exports.addNumber = (req, res) => {
    const { num1, num2 } = req.body;
    const sum = num1 + num2;
  
    if (sum > 1000000) {
      return res.json({
        status: `error`,
        message: "Overflow",
      });
    }
    return res.json({
      status: `success`,
      message: `the sum of given two numbers`,
      sum,
    });
  };
  
  exports.subNumber = (req, res) => {
    const { num1, num2 } = req.body;
    const difference = num1 - num2;
  
    if (difference < -1000000) {
      return res.json({
        status: `error`,
        message: "Underflow",
      });
    }
    return res.json({
      status: `success`,
      message: `the difference of given two numbers`,
      difference,
    });
  };
  
  exports.multiplyNumber = (req, res) => {
    const { num1, num2 } = req.body;
  
    const result = num1 * num2;
    if (result > 1000000) {
      return res.json({
        status: `error`,
        message: "Overflow",
      });
    }
    return res.json({
      status: `success`,
      message: `The product of given numbers`,
      result,
    });
  };
  
  exports.divisionNumber = (req, res) => {
    const { num1, num2 } = req.body;
  
    if (num2 === 0) {
      return res.json({
        status: `error`,
        message: `Cannot divide by zero`,
      });
    }
    const result = num1 / num2;
  
    if (result > 1000000) {
      return res.json({
        status: `error`,
        message: `Overflow`,
      });
    }
    return res.json({
      status: `success`,
      message: `The division of given numbers`,
      result,
    });
  };