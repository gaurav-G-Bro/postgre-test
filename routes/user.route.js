import Router from "express";
import {
  register,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";
const router = Router();

router.post("/signup", register);
router.get("/", getAllUsers);
router.get("/:userId", getSingleUser);
router.patch("/update/:userId", updateUser);
router.delete("/delete/:userId", deleteUser);

export default router;
