import express from "express";
import { authenticate as authenticateUser, authorizeRoles as requireApprovedUser } from "../../middlewares/authenticate";
import { dashboardController } from "../../controllers/dashboard";
import { handleLogin } from "../../controllers/approvedUsers/auth";
import asyncHandler from "../../utils/asyncHandler";

const router = express.Router();


router.post("/login",asyncHandler(handleLogin))

router.get("/dash", authenticateUser, requireApprovedUser("USER"), (req, res, next) => {
	dashboardController(req, res, next).catch(next);
});

export default router;
