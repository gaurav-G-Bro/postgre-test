import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const register = asyncHandler(async (req, res) => {
  const { email, name } = req.body;

  try {
    if (!email || email.trim() === "")
      throw new ApiError(400, "email is required");
    if (!name || name.trim() === "")
      throw new ApiError(400, "name is required");

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser)
      throw new ApiError(400, "user already registered with this email");

    const newUser = await prisma.user.create({
      data: {
        email,
        name,
      },
    });
    if (!newUser) throw new ApiError(500, "failed to register user, try again");

    return res
      .status(200)
      .json(new ApiResponse(200, "user registered successfully", newUser));
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    if (!users) throw new ApiError(500, "failed to fetch the users");
    const status =
      users.length <= 0 ? "No user available" : "users fetched successfully";
    return res.status(200).json(new ApiResponse(200, status, users));
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const getSingleUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  try {
    if (!userId || userId.trim() === "")
      throw new ApiError(400, "user ID is required");

    const existedUser = await prisma.user.findUnique({
      where: { id: parseInt(userId) },
    });
    if (!existedUser) throw new ApiError(404, "user does not exist or removed");

    return res
      .status(200)
      .json(
        new ApiResponse(200, "user details fetched successfully", existedUser)
      );
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const updateUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const { name } = req.body;
  try {
    if (!userId || userId.trim() === "")
      throw new ApiError(400, "user ID is required");

    if (!name || name.trim() === "")
      throw new ApiError(400, "name is required");

    const existedUser = await prisma.user.findUnique({
      where: { id: parseInt(userId) },
    });
    if (!existedUser) throw new ApiError(404, "user does not exist or removed");

    const updatedStatus = await prisma.user.update({
      where: {
        id: parseInt(userId),
      },
      data: {
        name,
      },
    });

    if (!updatedStatus) throw new ApiError(500, "failed to update the user");
    return res
      .status(200)
      .json(
        new ApiResponse(200, "user details updated successfully", updatedStatus)
      );
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  try {
    if (!userId || userId.trim() === "")
      throw new ApiError(400, "user ID is required");

    const existedUser = await prisma.user.findUnique({
      where: { id: parseInt(userId) },
    });
    if (!existedUser) throw new ApiError(404, "user does not exist or removed");

    const removedStatus = await prisma.user.delete({
      where: { id: parseInt(userId) },
    });
    if (!removedStatus) throw new ApiError(500, "failed to delete the user");

    return res
      .status(200)
      .json(new ApiResponse(200, "user deleted successfully"));
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

export { register, getAllUsers, getSingleUser, updateUser, deleteUser };
