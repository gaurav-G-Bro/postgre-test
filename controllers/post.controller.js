import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";

const createPost = asyncHandler(async (req, res) => {
  try {
    return res.status(200).json(new ApiResponse(200));
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const getAllPosts = asyncHandler(async (req, res) => {
  try {
    return res.status(200).json(new ApiResponse(200));
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const getSinglePost = asyncHandler(async (req, res) => {
  try {
    return res.status(200).json(new ApiResponse(200));
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const updatePost = asyncHandler(async (req, res) => {
  try {
    return res.status(200).json(new ApiResponse(200));
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const deletePost = asyncHandler(async (req, res) => {
  try {
    return res.status(200).json(new ApiResponse(200));
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

export { createPost, getAllPosts, getSinglePost, updatePost, deletePost };
