import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { ApprovedUserModel } from '../models/ApprovedUser';

dotenv.config();

declare module 'express-serve-static-core' {
  interface Request {
    user?: {
      id: string;
      name: string;
      email: string;
      contact: string;
      role: 'USER' | 'APPLICANT';
    };
  }
}

export const authenticate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const token =
    req.cookies?.accessToken ||
    (req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
        ? req.headers.authorization.split(" ")[1]
        : null);

  if (!token) {
    res.status(401).json({ success: false, message: 'Unauthorized: No token provided' });
    return;
  }

  try {
    console.log("Inside try");
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string) as { id: string; role: 'USER' | 'APPLICANT' };
    console.log("DEcoded" , decoded);
    const user = await ApprovedUserModel.findById(decoded.id);
    if (!user) {
      res.status(404).json({ success: false, message: 'User not found' });
      return;
    }

    req.user = {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      contact: user.contact,
      role: decoded.role,
    };
    
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Unauthorized: Invalid token' });
  }
};

export const authorizeRoles = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    console.log("Role:",  req.user?.role);
    if (!req.user || !roles.includes(req.user.role)) {
      console.log("Role:",  roles);
      res.status(403).json({ success: false, message: 'Forbidden: Insufficient permissions' });
      return;
    }
    next();
  };
};
