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

interface TextQuestion {
  id: string;
  question?: string;
  type: questionTypes.TEXT_INPUT;
  label?: string;
  placeholder?: string;
  validation?: ValidationRules;
  unit?: string;
  condition?: {
    if: string;
    removeCards?: number[];
    removeQuestions?: number[];
  };
}
interface ChoicesQuestion {
  id: string;
  type: questionTypes.CHOICES;
  textInput?: { placeholder: string };
  question?: string;
  options: { text: string; subtext?: string; other?: boolean }[];
  validation?: ValidationRules;
  condition?: {
    if: string;
    removeCards?: number[];
    removeQuestions?: number[];
  };
}

export type Question = TextQuestion | ChoicesQuestion;



export const questions: Question[] = [
  {
    id: "q_1",
    type: questionTypes.TEXT_INPUT,
    label: "Founder’s Name*",
    validation: { required: true },
  },
  {
    id: "q_2",
    type: questionTypes.TEXT_INPUT,
    label: "Designation*",
    validation: { required: true },
  },
  {
    id: "q_3",
    type: questionTypes.TEXT_INPUT,
    label: "Business email address*",
    validation: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  },
  {
    id: "q_4",
    type: questionTypes.TEXT_INPUT,
    label: "Contact number*",
    validation: { required: true, maxLength: 10, type: "number" },
  },
  {
    id: "q_5",
    type: questionTypes.TEXT_INPUT,
    label: "Registered entity name*",
    validation: { required: true },
  },
  {
    id: "q_6",
    type: questionTypes.TEXT_INPUT,
    label: "Brand name*",
    validation: { required: true },
  },
  {
    id: "q_7",
    type: questionTypes.TEXT_INPUT,
    label: "Year of establishment*",
    validation: { required: true, maxLength: 4, type: "number" },
  },
  {
    id: "q_8",
    type: questionTypes.TEXT_INPUT,
    label: "City of registeration*",
    validation: { required: true },
  },
  {
    id: "q_9",
    type: questionTypes.TEXT_INPUT,
    label: "Website URL",
    validation: {
      pattern:
        /^(https?:\/\/([\w-]+(\.[\w-]+)+)(\/[\w-.~:?#[\]@!$&'()*+,;=]*)?|^$)$/,
    },
  },
  {
    id: "q_10",
    type: questionTypes.TEXT_INPUT,
    label: "LinkedIn Profile",
    validation: {
      pattern:
        /^(https?:\/\/([\w-]+(\.[\w-]+)+)(\/[\w-.~:?#[\]@!$&'()*+,;=]*)?|^$)$/,
    },
  },
  {
    id: "q_11",
    type: questionTypes.TEXT_INPUT,
    label: "Other social media profile",
    validation: {
      pattern:
        /^(https?:\/\/([\w-]+(\.[\w-]+)+)(\/[\w-.~:?#[\]@!$&'()*+,;=]*)?|^$)$/,
    },
  },
  {
    id: "q_12",
    type: questionTypes.CHOICES,
    question: "What is your Legal structure*",
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
    validation: { required: true },
  },
  {
    id: "q_13",
    type: questionTypes.TEXT_INPUT,
    question: "What percentage of your business do women founders own?*",
    placeholder: "In percentage",
    unit: "%",
    validation: { required: true, type: "number", max: 100, min: 0 },
  },
  {
    id: "q_14",
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
    id: "q_15",
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
    id: "q_16",
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
    condition: {
      if: "Pre - revenue",
      removeQuestions: [17, 18],
    },
  },
  {
    id: "q_17",
    type: questionTypes.TEXT_INPUT,
    question: "What was the topline revenue last year (2023/24) INR Lacs",
    placeholder: "In INR Lacs",
    validation: { type: "number" },
    unit: "Lacs",
  },
  {
    id: "q_18",
    type: questionTypes.TEXT_INPUT,
    question: "Growth you targeting for this year?",
    placeholder: "In percentage",
    validation: { type: "number", min: 0, max: 100 },
    unit: "%",
  },
  {
    id: "q_19",
    type: questionTypes.CHOICES,
    question: "Your customers are*",
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
    id: "q_20",
    type: questionTypes.TEXT_INPUT,
    question: "Number of monthly paying customers (estimated)*",
    placeholder: "In numbers",
    validation: { required: true, type: "number" },
  },
  {
    id: "q_21",
    type: questionTypes.CHOICES,
    question: "Does your business currently exports products/ services?*",
    options: [
      {
        text: "Yes, Definately",
      },
      {
        text: "No, Not This Time",
      },
    ],
    textInput: { placeholder: "If Yes, to which countries?" },
    validation: { required: true },
    condition: {
      if: "No, Not This Time",
      removeCards: [10],
      removeQuestions: [22],
    },
  },
  {
    id: "q_22",
    type: questionTypes.TEXT_INPUT,
    question: "What percentage of your overall revenue comes from exports?",
    placeholder: "In numbers",
    validation: { type: "number", min: 0, max: 100 },
  },
  {
    id: "q_23",
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
  },
  {
    id: "q_24",
    type: questionTypes.CHOICES,
    question:
      "Does your business have a physical presence (office, branch, etc. ) in the following countries?*",
    options: [
      {
        text: "United States",
      },
      {
        text: "UAE",
      },
      {
        text: "Not at this point",
      },
      {
        text: "Others",
      },
    ],
    textInput: { placeholder: "(Please specify)" },
    validation: { required: true },
  },
  {
    id: "q_25",
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
];
