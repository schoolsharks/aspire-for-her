import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { ApprovedUserModel } from '../models/ApprovedUser';
import { ApplicationRoles } from '../types/enums';

dotenv.config();

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
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string) as { id: string; role: ApplicationRoles };
    const user = await ApprovedUserModel.findById(decoded.id);
    if (!user) {
      res.status(404).json({ success: false, message: 'User not found' });
      return;
    }

    req.user = {
      id: user._id.toString(),
      role: decoded.role,
    };
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Unauthorized: Invalid token' });
  }
};

export const authorizeRoles = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user || !roles.includes(req.user.role)) {
      res.status(403).json({ success: false, message: 'Forbidden: Insufficient permissions' });
      return;
    }
    next();
  };
};
