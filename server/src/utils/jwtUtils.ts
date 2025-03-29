import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Define Token Payload Interface
export interface TokenPayload {
  id: string; // User ID
  role: "USER" | "APPLICANT"; // Role of the user
}

// Ensure secret keys are provided
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const ACCESS_TOKEN_EXPIRATION = process.env.ACCESS_TOKEN_EXPIRATION || "1h";

if (!ACCESS_TOKEN_SECRET) {
  throw new Error("Missing ACCESS_TOKEN_SECRET in environment variables.");
}

//Function to Generate an Access Token
export const generateAccessToken = (payload: TokenPayload): string => {
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRATION,
  });
};

// ✅ Function to Verify an Access Token
export const verifyAccessToken = (token: string): TokenPayload => {
  try {
    return jwt.verify(token, ACCESS_TOKEN_SECRET) as TokenPayload;
  } catch (error) {
    throw new Error("Invalid or expired token.");
  }
};




// import jwt from 'jsonwebtoken';
// import dotenv from "dotenv"

// dotenv.config();


// // interface TokenPayload {
// //   id: string;
// // }

// export interface TokenPayload {
//   id: string; // User ID
//   tokenType: string; // Type of token (e.g., "approved" or "registration")
//   role: "USER" | "APPLICANT"; // Role of the user
// }

// export const generateAccessToken = (payload: TokenPayload): string => {
//   return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION });
// };


// export const verifyAccessToken = (token: string): TokenPayload => {
//   return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!) as TokenPayload;
// };


