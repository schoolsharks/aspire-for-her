export enum questionTypes {
  TEXT_INPUT = "TEXT_INPUT",
  CHOICES = "CHOICES",
}
interface Card {
  id: string;
  title: string;
  questions: string[];
}

export const cardsData: Card[] = [
  {
    id: "c_1",
    title: "Enter Your Details",
    questions: ["q_1", "q_2", "q_3", "q_4"],
  },
  {
    id: "c_2",
    title: "Business information",
    questions: ["q_5", "q_6", "q_7", "q_8"],
  },
  {
    id: "c_3",
    title: "Socials",
    questions: ["q_9", "q_10","q_11"], // q_11 is new question added for not applicable checkbox
  },
  // {
  //   id: "c_3",
  //   title: "Socials",
  //   questions: ["q_9", "q_10", "q_11"],
  // },
  {
    id: "c_4",
    title: "Business information",
    questions: ["q_12", "q_13"],
  },
  // {
  //   id: "c_5",
  //   title: "What business idea are you working on?",
  //   questions: ["q_14"],
  // },
  // {
  //   id: "c_6",
  //   title: "Organisation size",
  //   questions: ["q_15"],
  // },
  {
    id: "c_7",
    title: "What best describes your business? ",
    questions: ["q_16"],
  },
  {
    id: "c_8",
    title: "Business stage",
    questions: ["q_17", "q_18","q_20"],
  },
  // {
  //   id: "c_8",
  //   title: "Business stage",
  //   questions: ["q_17", "q_18", "q_19"],
  // },
  // {
  //   id: "c_9",
  //   title: "Business operations",
  //   questions: ["q_20", "q_21"],
  // },
  {
    id: "c_10",
    title: "Export activity",
    questions: ["q_22", "q_23", "q_24"],
  },
  {
    id: "c_11",
    title: "Export activity",
    questions: ["q_25"],
  },
  {
    id: "c_12",
    title: "International Presence",
    questions: ["q_26", "q_27"],
  },
  {
    id: "c_13",
    title: "Select your preferred city for the workshop*",
    questions: ["q_28"],
  },
  {
    id: "c_14",
    title: "How did you hear about this program?* (Choose one)",
    questions: ["q_29"],
  },
];
