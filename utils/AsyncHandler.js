const asyncHandler = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      return res.status(error.statusCode || 500).json({
        statusCode: error.statusCode || 500,
        message: error.message || "Internal server error",
        data: error.data || null,
        success: error.status || false,
      });
    }
  };
};

export { asyncHandler };
