import { NextFunction, Request, Response } from "express";
import AppError from "../../utils/appError";
import { ApprovedUserModel } from "../../models/ApprovedUser";
import { generateAccessToken } from "../../utils/jwtUtils";
import { ApplicationRoles } from "../../types/enums";

export const handleLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { emailPhone } = req.body;

  if (!emailPhone) {
    return next(new AppError("Email or Phone is required", 400));
  }

  const user = await ApprovedUserModel.findOne({
    $or: [{ email: emailPhone }, { phone: emailPhone }],
  }).select("name");

  if (!user) {
    return next(new AppError("User not found", 404));
  }

  const accessToken = generateAccessToken({
    id: user._id.toString(),
    role: ApplicationRoles.APPROVED_USER,
  });

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
    maxAge: 24 * 60 * 60 * 1000,
  });
  return res.status(200).json({
    status: "success",
    user:user,
    accessToken,
  });
};



export const handleFetchUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.user?.id;
  const user = await ApprovedUserModel.findById(userId).select(
    "name city engagement"
  );

  if (!user) {
    return next(new AppError("User not found", 404));
  }

  return res.status(200).json({ success: true, user: user });
};