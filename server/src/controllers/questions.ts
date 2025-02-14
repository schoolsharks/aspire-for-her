import { NextFunction, Request, response, Response } from "express";

import { UserModel } from "../models/Users";
import AppError from "../utils/appError";
import { cardsData } from "../data/cardsData";
import { questions } from "../data/questions";

export const respondToQuestions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.user;
  const { responses } = req.body;

  if (!Array.isArray(responses) || responses.length === 0) {
    return next(new AppError("Invalid Response format", 400));
  }

  const user = await UserModel.findById(userId);
  if (!user) {
    return next(new AppError("User not found", 404));
  }

  responses.forEach(({ questionId, answer }) => {
    const existingResponse = user.responses.find(
      (response) => response.questionId === questionId
    );

    if (existingResponse) {
      existingResponse.answer = answer;
    } else {
      user.responses.push({ questionId, answer }); // Add new response
    }
  });

  await user.save();

  return res.status(200).json({ message: "Responses updated successfully" });
};

export const updateSelectedBenefits = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.user;
  const { benefits } = req.body;

  if (!Array.isArray(benefits)) {
    return next(new AppError("Invalid benefits format", 400));
  }

  const user = await UserModel.findById(userId);
  if (!user) {
    return next(new AppError("User not found", 404));
  }

  user.selectedBenefits = benefits.map((b) => ({
    benefitId: String(b.benefitId),
  }));
  await user.save();

  res.status(200).json({
    success: true,
    message: "Selected benefits updated successfully",
    selectedBenefits: user.selectedBenefits,
  });
};



export const fetchQuestions = (req: Request, res: Response,next:NextFunction) => {
  try {
    const populatedCardsData = cardsData.map(card => {
      return {
        ...card,
        questions: card.questions.map(questionId => {
          const question = questions.find(q => q.id === questionId);
          if (!question) {
            throw new Error(`Question with id ${questionId} not found`);
          }
          return question;
        })
      };
    });

    res.status(200).json(populatedCardsData);
  } catch (error) {
    console.error('Error populating cards data:', error);
    return next(new AppError("Internal Server Error",500))
  }
};