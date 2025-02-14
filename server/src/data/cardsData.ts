
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
    id: "1",
    title: "Enter Your Details",
    questions: ["q_1", "q_2", "q_3", "q_4"],
  },
  {
    id: "2",
    title: "Business information",
    questions: ["q_5", "q_6", "q_7", "q_8"],
  },
  {
    id: "3",
    title: "Socials",
    questions: ["q_9", "q_10", "q_11"],
  },
  {
    id: "4",
    title: "Business information",
    questions: ["q_12", "q_13"],
  },
  {
    id: "5",
    title: "Organisation size",
    questions: ["q_14"],
  },
  {
    id: "6",
    title: "What best describes your business? ",
    questions: ["q_15"],
  },
  {
    id: "7",
    title: "Business stage",
    questions: ["q_16", "q_17", "q_18"],
  },
  {
    id: "8",
    title: "Business operations",
    questions: ["q_19", "q_20"],
  },
  {
    id: "9",
    title: "Export activity",
    questions: ["q_21", "q_22"],
  },
  {
    id: "10",
    title: "Export activity",
    questions: ["q_23"],
  },
  {
    id: "11",
    title: "International Presence",
    questions: ["q_24"],
  },
  {
    id: "12",
    title: "Select your preferred city for the workshop",
    questions: ["q_25"],
  },
];
