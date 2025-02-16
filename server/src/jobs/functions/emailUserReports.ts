import ExcelJS from "exceljs";
import { IUser, UserModel } from "../../models/Users";
import { questions, questionTypes } from "../../data/questions";
import { sendEmail } from "../../services/emailService";
import * as emails from "../../utils/emailIds";
import { cardsData } from "../../data/cardsData";
import { benefitsData } from "../../data/benefitsMapping";

const managementEmails = [
  emails.MANISH_BULCHANDANI,
  emails.ANUJ_KANWAR,
  emails.VIBHA_MANOHAR
];

const getQuestionText = (questionId: string): string => {
  const question = questions.find((q) => q.id === questionId);
  const card = cardsData.find((card) => card.questions.includes(questionId));
  return (
    question?.question ||
    (question?.type === questionTypes.TEXT_INPUT && question?.label) ||
    card?.title ||
    ""
  );
};

const generateExcelBuffer = async (users: IUser[]): Promise<Buffer> => {
  const workbook = new ExcelJS.Workbook();

  const responseSheet = workbook.addWorksheet("Responses");
  const benefitsSheet = workbook.addWorksheet("Ask from the Program");

  const headers = ["Name", "Email", "Contact", "Ask from the Program"];
  const questionHeaders = questions.map((q) => getQuestionText(q.id));
  responseSheet.addRow([...headers, ...questionHeaders]);

  const benefitTitles = benefitsData.map((b) => b.title);
  benefitsSheet.addRow(["Name", "Email", "Contact", ...benefitTitles]);

  users.forEach((user) => {
    const userDetails = [user.name || "", user.email || "", user.contact || ""];

    const selectedBenefits = user.selectedBenefits
      .map((item) => benefitsData.find((b) => b.id === item.benefitId)?.title)
      .join("| ");
    const responseMap = new Map(
      user.responses.map((r) => [r.questionId, r.answer.join(", ")])
    );

    const responseRow = [
      ...userDetails,
      selectedBenefits,
      ...questions.map((q) => responseMap.get(q.id) || ""),
    ];
    responseSheet.addRow(responseRow);

    const selectedBenefitIds = new Set(
      user.selectedBenefits.map((item) => item.benefitId)
    );
    const benefitsRow = [
      ...userDetails,
      ...benefitsData.map((b) => (selectedBenefitIds.has(b.id) ? 1 : 0)),
    ];
    benefitsSheet.addRow(benefitsRow);
  });

  const arrayBuffer = await workbook.xlsx.writeBuffer();
  return Buffer.from(arrayBuffer);
};

export const exportUserResponsesAndSendEmail = async () => {
  try {
    const users = await UserModel.find().lean();
    if (!users.length) throw new Error("No users found");

    const buffer = await generateExcelBuffer(users);

    const date = new Date()
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .replace(/\//g, "-");

    await sendEmail({
      to: managementEmails,
      subject: `User Report - ${users.length} Users`,
      body: `Got ${users.length} registerations till ${date}`,
      attachments: [
        {
          name: `User_Responses_till_${date}.xlsx`,
          content: buffer,
          mimeType:
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        },
      ],
    });

    console.log("User report email sent successfully!");
  } catch (error) {
    console.error("Error in exporting and emailing:", error);
  }
};
