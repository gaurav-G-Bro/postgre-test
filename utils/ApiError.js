class ApiError extends Error {
  constructor(
    statusCode,
    message,
    data = null,
    errors = [],
    status = false,
    stack = []
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.status = status;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
