import express from "express";
import userRoutes from "./userRoutes"
import DashboardRoutes from "./DashboardRoutes"
// import adminRoutes from "./adminRoutes"

const router = express.Router();

router.use("/users",userRoutes)
router.use("/dashboard",DashboardRoutes)
// router.use("/admin",adminRoutes)

export default router;
