export enum questionTypes {
  TEXT_INPUT = "TEXT_INPUT",
  CHOICES = "CHOICES",
}
interface ValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  min?: number;
  max?: number;
  type?: "number" | "text";
}

interface Condition {
  if: string[];
  removeCards?: string[];
  removeQuestions?: string[];
  notRequiredQuestions?: string[];
}

interface BaseQuestion {
  id: string;
  question?: string;
  validation?: ValidationRules;
  defaultHidden?: boolean;
  condition?: Condition[];
}

interface TextQuestion extends BaseQuestion {
  type: questionTypes.TEXT_INPUT;
  label?: string;
  placeholder?: string;
  unit?: string;
  multiline?: boolean;
}

interface ChoicesQuestion extends BaseQuestion {
  type: questionTypes.CHOICES;
  textInput?: { placeholder: string };
  options: { text: string; subtext?: string; other?: boolean }[];
}

export type Question = TextQuestion | ChoicesQuestion;

export const questions: Question[] = [
  {
    id: "q_1",
    type: questionTypes.TEXT_INPUT,
    label: "Founder’s Name",
    validation: { required: true },
  },
  {
    id: "q_2",
    type: questionTypes.TEXT_INPUT,
    label: "Designation",
    validation: { required: true },
  },
  {
    id: "q_3",
    type: questionTypes.TEXT_INPUT,
    label: "Business email address",
    validation: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  },
  {
    id: "q_4",
    type: questionTypes.TEXT_INPUT,
    label: "Contact number",
    validation: { required: true, maxLength: 10, type: "number" },
  },

  {
    id: "q_5",
    type: questionTypes.TEXT_INPUT,
    label: "Registered entity name",
    validation: { required: true },
  },
  {
    id: "q_6",
    type: questionTypes.TEXT_INPUT,
    label: "Brand name",
    validation: { required: true },
  },
  {
    id: "q_7",
    type: questionTypes.TEXT_INPUT,
    label: "Year of establishment",
    validation: {
      required: true,
      maxLength: 4,
      type: "number",
      pattern: /^\d{4}$/,
    },
  },
  {
    id: "q_8",
    type: questionTypes.TEXT_INPUT,
    label: "Primary city of operation",
    validation: { required: true },
  },

  {
    id: "q_9",
    type: questionTypes.TEXT_INPUT,
    label: "Website URL",
    validation: {
      required: true,
      pattern:
        /^(https?:\/\/([\w-]+(\.[\w-]+)+)(\/[\w-.~:?#[\]@!$&'()+,;=%])?|^$)$/i,
    },
  },
  {
    id: "q_10",
    type: questionTypes.TEXT_INPUT,
    label: "LinkedIn Profile",
    validation: {
      required: true,
      pattern:
        /^(https?:\/\/([\w-]+(\.[\w-]+)+)(\/[\w-.~:?#[\]@!$&'()+,;=%])\/?)?$/,
    },
  },
  // {
  //   id: "q_11",
  //   type: questionTypes.TEXT_INPUT,
  //   label: "Other social media profile",
  //   validation: {
  //     pattern:
  //       /^(https?:\/\/([\w-]+(\.[\w-]+)+)(\/[\w-.~:?#[\]@!$&'()+,;=%])?|^$)$/i,
  //   },
  // },
  {
    id: "q_11",
    type: questionTypes.TEXT_INPUT,
    label:"Write NA if you dont have",
    condition: [
      { if: ["NA"], notRequiredQuestions: ["q_9", "q_10"] },
    ],
  },

  {
    id: "q_12",
    type: questionTypes.CHOICES,
    question: "What is your Legal structure",
    options: [
      {
        text: "Private limited",
      },
      {
        text: "Limited Liability Partnership",
      },
      {
        text: "Partnership",
      },
      {
        text: "Proprietorship",
      },
      {
        text: "Not Yet Registered",
      },
    ],
    condition: [
      {
        if: ["Not Yet Registered"],
        removeCards: [
          "c_6",
          "c_7",
          "c_8",
          "c_9",
          "c_10",
          "c_11",
          "c_12",
        ],
        removeQuestions: ["q_13"],
      },
      {
        if: [
          "Private limited",
          "Limited Liability Partnership",
          "Partnership",
          "Proprietorship",
        ],
        removeCards: ["c_5"],
      },
    ],
    validation: { required: true },
  },
  {
    id: "q_13",
    type: questionTypes.TEXT_INPUT,
    question: "What percentage of your business do women founders own?",
    placeholder: "In percentage",
    unit: "%",
    validation: { required: true, type: "number", max: 100, min: 0 },
  },

  {
    id: "q_14",
    type: questionTypes.TEXT_INPUT,
    multiline: true,
    question: "Describe in 100 words",
    validation: { required: true, maxLength: 600 },
  },

  {
    id: "q_15",
    type: questionTypes.CHOICES,
    options: [
      {
        text: "1-50 employees",
      },
      {
        text: "51- 200 employees",
      },
      {
        text: "201-500 employees",
      },
      {
        text: "Over 500 employees",
      },
    ],
    validation: { required: true },
  },

  {
    id: "q_16",
    type: questionTypes.CHOICES,
    options: [
      {
        text: "Technology & SaaS",
        subtext: "IT services, AI solutions, software development",
      },
      {
        text: "Creative Services",
        subtext: "Design, content creation, branding, marketing",
      },
      {
        text: "Business & Professional Consulting",
        subtext:
          "HR, tax advisory, legal services, corporate training, accounting, financial planning, investment advisory",
      },
      {
        text: "Hospitality & Customer Experience",
        subtext:
          "Travel planning, event management, call centers, technical support",
      },
      {
        text: "Coaching & Training",
        subtext:
          "Business coaching, executive coaching, career guidance, wellness coaching",
      },
      {
        text: "Other",
        other: true,
      },
    ],
    validation: { required: true },
  },

  {
    id: "q_17",
    type: questionTypes.CHOICES,
    options: [
      {
        text: "Pre - revenue",
      },
      {
        text: "Revenue generating",
      },
    ],
    validation: { required: true },
    condition: [
      {
        if: ["Pre - revenue"],
        removeQuestions: ["q_18", "q_19", "q_21"],
        removeCards: ["c_10", "c_11", "c_12"],
      },
    ],
  },
  {
    id: "q_18",
    type: questionTypes.TEXT_INPUT,
    question: "What was the topline revenue last year (2023/24) INR Lacs",
    placeholder: "In INR Lacs",
    validation: { type: "number", required: true, max: 100000 },
    unit: "Lacs",
  },
  {
    id: "q_19",
    type: questionTypes.TEXT_INPUT,
    question: "Growth percentage you are targeting for this year?",
    placeholder: "In percentage",
    validation: { type: "number", min: 0, max: 100, required: true },
    unit: "%",
  },

  {
    id: "q_20",
    type: questionTypes.CHOICES,
    question: "Your customers are",
    options: [
      {
        text: "Business to business (B2B)",
      },
      {
        text: "Business to customer (B2C)",
      },
      {
        text: "Business to Business to customer (B2B2C)",
      },
    ],
    validation: { required: true },
  },
  {
    id: "q_21",
    type: questionTypes.TEXT_INPUT,
    question: "Number of monthly paying customers (estimated)",
    placeholder: "In numbers",
    validation: { required: true, type: "number" },
  },

  {
    id: "q_22",
    type: questionTypes.CHOICES,
    question: "Does your business currently exports products/ services?",
    options: [
      {
        text: "Yes, Definitely",
      },
      {
        text: "No, Not This Time",
      },
    ],
    // textInput: { placeholder: "If Yes, to which countries?" },
    validation: { required: true },
    condition: [
      {
        if: ["No, Not This Time"],
        removeCards: ["c_11"],
        removeQuestions: ["q_23", "q_24"],
      },
    ],
  },
  {
    id: "q_23",
    type: questionTypes.TEXT_INPUT,
    question: "If Yes, to which countries?",
    validation: { required: true },
  },
  {
    id: "q_24",
    type: questionTypes.TEXT_INPUT,
    question: "What percentage of your overall revenue comes from exports?",
    placeholder: "In Percentage",
    unit: "%",
    validation: { type: "number", min: 0, max: 100, required: true },
  },

  {
    id: "q_25",
    type: questionTypes.CHOICES,
    question:
      "What is your approximate monthly export sales volume? (select one)",
    options: [
      {
        text: "Just starting",
      },
      {
        text: "Less than $5k per month",
      },
      {
        text: "$5k - $10k per month",
      },
      {
        text: "$10k - $50k per month",
      },
      {
        text: "Over $50k per month",
      },
    ],
    validation: { required: true },
  },

  {
    id: "q_26",
    type: questionTypes.CHOICES,
    question:
      "Does your business have a physical presence (office, branch, etc. ) in the following countries?",
    options: [
      {
        text: "United States",
      },
      {
        text: "UAE",
      },
      {
        text: "Both United States & UAE",
      },
      {
        text: "Not at this point",
      },
      {
        text: "Others",
      },
    ],
    condition: [
      {
        if: ["United States", "UAE","Both United States & UAE", "Not at this point"],
        removeQuestions: ["q_27"],
      },
    ],
    // textInput: { placeholder: "(Please specify)" },
    validation: { required: true },
  },
  {
    id: "q_27",
    type: questionTypes.TEXT_INPUT,
    question: "Please Specify",
    defaultHidden: true,
    validation: { required: true },
  },

  {
    id: "q_28",
    type: questionTypes.CHOICES,
    options: [
      { text: "Delhi/NCR" },
      { text: "Chandigarh" },
      { text: "Kolkata" },
      { text: "Mumbai" },
      { text: "Pune" },
      { text: "Ahmedabad" },
      { text: "Surat" },
      { text: "Indore" },
      { text: "Bengaluru" },
      { text: "Chennai" },
      { text: "Coimbatore" },
      { text: "Can not travel" },
    ],
    validation: { required: true },
  },
  {
    id: "q_29",
    type: questionTypes.CHOICES,
    options: [
      { text: "AFH Newsletter" },
      { text: "AFH Social Media" },
      { text: "AFH WhatsApp Group" },
      {
        text: "Other",
        other: true,
      },
    ],
    validation: { required: true },
  },
];
