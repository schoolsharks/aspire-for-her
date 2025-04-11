import express from "express"
import asyncHandler from "../../utils/asyncHandler"
import * as userControllers from "../../controllers/users/users"
import * as questionsControllers from "../../controllers/users/questions"
import { authenticate } from "../../middlewares/authenticate"

const router=express.Router()

// router.get("/getUser",authenticate,authorize[Roles.USER],asyncHandler(authControllers.login))

router.post("/create",asyncHandler(userControllers.handleCreateUser))

// Protected
router.get("/getUser",authenticate,asyncHandler(userControllers.handleFetchUser))
router.get("/reset",authenticate,asyncHandler(userControllers.handleReset))

router.get("/question",authenticate,questionsControllers.fetchQuestions)
router.post("/question",authenticate,asyncHandler(questionsControllers.respondToQuestions))

router.post("/benefits",authenticate,asyncHandler(questionsControllers.updateSelectedBenefits))

router.post("/login",asyncHandler(userControllers.handleUserLogin))

export default router