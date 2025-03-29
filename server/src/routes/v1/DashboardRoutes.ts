import express from "express";
import { authenticate as authenticateUser, authorizeRoles as requireApprovedUser } from "../../middlewares/authenticate";
import { dashboardController } from "../../controllers/dashboard";

const router = express.Router();

router.get("/dash", authenticateUser, requireApprovedUser("USER"), (req, res, next) => {
	dashboardController(req, res, next).catch(next);
});

export default router;
