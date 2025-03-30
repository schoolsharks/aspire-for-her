import { Request, Response, NextFunction } from "express";
import AppError from "../utils/appError";
import { QuickPulseModel } from "../models/QuickPulse";
import { WorkshopModel } from "../models/Workshop"; 
import { ApprovedUserModel } from "../models/ApprovedUser";


 const dashboardController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    //Ensure req.user exists (Middleware already guarantees this)
    if (!req.user) {
      return next(new AppError("Unauthorized access", 401));
    }
    const quickPulses = await QuickPulseModel.find({}).sort({ createdAt: -1 });
    const workshops = await WorkshopModel.find({});
    const approvedUser = await ApprovedUserModel.findById(req.user.id).select("city engagement");

    if (!approvedUser) {
      return next(new AppError("User not found", 404));
    }
    //Return Dashboard Data
    return res.status(200).json({
      success: true,
      message: "Welcome to your dashboard!",
      user: {
        id: req.user.id,
        city: approvedUser.city,
        engagement: approvedUser.engagement,
      },
      dashboardContent: {
        quickPulses : quickPulses,
        workshops: workshops,
      },
    });
  } catch (error) {
    return next(new AppError("Something went wrong", 500));
  }
};
export { dashboardController };