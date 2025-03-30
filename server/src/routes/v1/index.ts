import express from "express";
import userRoutes from "./userRoutes"
import approvedUserRoutes from "./approvedUserRoutes"
// import adminRoutes from "./adminRoutes"

const router = express.Router();

router.use("/users",userRoutes)
router.use("/approved-user",approvedUserRoutes)
// router.use("/admin",adminRoutes)

export default router;
