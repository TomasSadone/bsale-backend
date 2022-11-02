const petitionHandler = (req, res, pool, controller) => {
  try {
    if (req.params.id) {
      controller(req.params.id, pool, result => {
        res.json(result);
      });
      return;
    }
    controller(pool, result => {
      res.json(result);
    });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { petitionHandler };
