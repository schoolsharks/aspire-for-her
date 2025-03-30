import { NextFunction, Request, Response } from "express";
import { ActiveSessionModel } from "../../models/ActiveSession";
import AppError from "../../utils/appError";
import { ApprovedUserModel } from "../../models/ApprovedUser";
import {UserModel} from "../../models/Users";
import { generateAccessToken } from "../../utils/jwtUtils";
import { SessionModel } from "../../models/Sessions";
import { ApplicationRoles } from "../../types/enums";

// const handleCreateUser = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const { name, email, contact } = req.body;

//   const activeSession = await ActiveSessionModel.findOne();

//   if (!activeSession) {
//     return next(new AppError("Active Session Module not found", 500));
//   }

//   if (!activeSession.isActive) {
//     return next(new AppError("No session is active", 400));
//   }

//   await SessionModel.findByIdAndUpdate(
//     activeSession.activeSession,
//     { $inc: { responses: 1 } },
//     { new: true }
//   );

//   const newUser = await UserModel.create({
//     name,
//     email,
//     contact,
//     session: activeSession.activeSession,
//   });
//   const accessToken = generateAccessToken({ id: newUser._id.toString() });

//   res.cookie("accessToken", accessToken, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
//     maxAge: 24 * 60 * 60 * 1000,
//   });

//   return res.status(200).json({ success: true });
// };

const handleCreateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, contact } = req.body;

    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return next(new AppError("User already registered", 400));
    }

    // Create a new user
    const newUser = await UserModel.create({
      name,
      email,
      contact,
    });

    // Generate JWT access token
    //const accessToken = generateAccessToken({ id: newUser._id.toString() });
    const accessToken = generateAccessToken({
      id: newUser._id.toString(),
      role: ApplicationRoles.USER,         // or "USER" if approved
    });
    
    // Set the token in an HTTP-only cookie
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        contact: newUser.contact,
      },
      token: accessToken,
    });
  } catch (error) {
    return next(new AppError("Something went wrong", 500));
  }
};

const handleFetchUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.user;
  const user = await UserModel.findById(userId).select(
    "name responses selectedBenefits"
  );

  if (!user) {
    return next(new AppError("User not found", 404));
  }

  return res.status(200).json({ success: true, data: user });
};


const handleReset = async (req: Request, res: Response) => {
  res.clearCookie("accessToken");
  return res.status(200).json({ success: true });
};

// const handleReset=async(req:Request,res:Response,next:NextFunction)=>{

//   const userId=req.user

//   const user=await UserModel.findById(userId)

//   if(!user){
//     return next(new AppError("User Not found",400))
//   }

//   const activeSession = await ActiveSessionModel.findOne();

//   if (!activeSession) {
//     return next(new AppError("Active Session Module not found", 500));
//   }

//   if (!activeSession.isActive) {
//     return next(new AppError("No session is active", 400));
//   }

//   await SessionModel.findByIdAndUpdate(
//     activeSession.activeSession,
//     { $inc: { players: 1 , "overallStats.trustScore":BASE_TRUST_SCORE,"overallStats.timeInHand":BASE_TIME} },
//     { new: true }
//   );

//   const newUser = await UserModel.create({
//     name:user.name,
//     email:user.email,
//     contact:user.contact,
//     employeeId:user.employeeId,
//     session: activeSession.activeSession,
//   });
//   const accessToken = generateAccessToken({ id: newUser._id.toString() });

//   res.cookie("accessToken", accessToken, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
//     maxAge: 24 * 60 * 60 * 1000,
//   });

//   return res.status(200).json({ success: true });
// }

const handleUserLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, contact } = req.body;

  if (!email && !contact) {
    return next(new AppError("Email or Contact is required", 400));
  }

  // Find user by email or contact
  const user = await  ApprovedUserModel.findOne({
    $or: [{ email }, { contact }],
  });

  if (!user) {
    return next(new AppError("User not found", 404));
  }

  // Generate access token
  const accessToken = generateAccessToken({ id: user._id.toString(), role: ApplicationRoles.USER });

  // Set the token in an HTTP-only cookie
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });

  return res.status(200).json({
    success: true,
    message: "Login successful",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      contact: user.contact,
    },
  });
};

export { handleCreateUser, handleFetchUser, handleReset,handleUserLogin };
