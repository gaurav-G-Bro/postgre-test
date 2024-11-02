class ApiResponse {
  constructor(statusCode = 200, message, data = [], success = true) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.success = success;
  }
}

export { ApiResponse };
