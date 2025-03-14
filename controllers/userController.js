// Get User info

const getUserController = async (req, res) => {
  res.status(200).send("user data 22");
  console.log(req.body.id);
  console.log("salam in ro barayee test dar git neveshtam");
};

module.exports = { getUserController };
