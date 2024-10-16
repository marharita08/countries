const errorHandler = async (err, req, res, next) => {
  const { message } = err;
  res.status(500).send(message);
  return next();
};

export { errorHandler };
