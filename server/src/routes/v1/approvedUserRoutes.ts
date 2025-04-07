import express from "express";
import { authenticate as authenticateUser, authorizeRoles} from "../../middlewares/authenticate";
import { dashboardController } from "../../controllers/dashboard";
import { handleFetchUser, handleLogin } from "../../controllers/approvedUsers/auth";
import asyncHandler from "../../utils/asyncHandler";
import { ApplicationRoles } from "../../types/enums";

const router = express.Router();


router.post("/login",asyncHandler(handleLogin))
router.get("/getUser",authenticateUser,authorizeRoles(ApplicationRoles.APPROVED_USER),asyncHandler(handleFetchUser))

router.get("/dash", authenticateUser, authorizeRoles(ApplicationRoles.APPROVED_USER), (req, res, next) => {
	dashboardController(req, res, next).catch(next);
});

export default router;
