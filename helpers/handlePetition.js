//Passes to controller its required params including callback to send the response.
const handlePetition = (req, res, pool, controller) => {
  try {
    //if we get params.id we are going to use a function that need them, so we use pass them
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

module.exports = { handlePetition };
