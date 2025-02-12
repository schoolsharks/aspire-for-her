export const enum questionTypes {
  TEXT_INPUT = "TEXT_INPUT",
  CHOICES = "CHOICES",
}

interface TextQuestion {
  id: number;
  question?: string;
  type: questionTypes.TEXT_INPUT;
  label?: string;
  placeholder?: string;
}
interface ChoicesQuestion {
  id: number;
  type: questionTypes.CHOICES;
  textInput?: { placeholder: string };
  question?: string;
  options: { text: string; subtext?: string; other?: boolean }[];
}

export type Question = TextQuestion | ChoicesQuestion;

export interface Card {
  title: string;
  questions: Question[];
}

export const cardsData: Card[] = [
  {
    title: "Enter Your Details",
    questions: [
      {
        id: 1,
        type: questionTypes.TEXT_INPUT,
        label: "Founder’s Name*",
      },
      {
        id: 2,
        type: questionTypes.TEXT_INPUT,
        label: "Designation",
      },
      {
        id: 3,
        type: questionTypes.TEXT_INPUT,
        label: "Business email address",
      },
      {
        id: 4,
        type: questionTypes.TEXT_INPUT,
        label: "Contact number",
      },
    ],
  },
  {
    title: "Business information",
    questions: [
      {
        id: 5,
        type: questionTypes.TEXT_INPUT,
        label: "Registered entity name",
      },
      {
        id: 6,
        type: questionTypes.TEXT_INPUT,
        label: "Brand name",
      },
      {
        id: 7,
        type: questionTypes.TEXT_INPUT,
        label: "Year of establishment",
      },
      {
        id: 8,
        type: questionTypes.TEXT_INPUT,
        label: "City of registeration",
      },
    ],
  },
  {
    title: "Socials",
    questions: [
      {
        id: 9,
        type: questionTypes.TEXT_INPUT,
        label: "Website URL",
      },
      {
        id: 10,
        type: questionTypes.TEXT_INPUT,
        label: "LinkedIn Profile",
      },
      {
        id: 11,
        type: questionTypes.TEXT_INPUT,
        label: "Other social media profile",
      },
    ],
  },
  {
    title: "Business information",
    questions: [
      {
        id: 12,
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
      },
      {
        id: 13,
        type: questionTypes.TEXT_INPUT,
        question: "What percentage of your business do women founders own?",
        placeholder: "In percentage",
      },
    ],
  },
  {
    title: "Organisation size",
    questions: [
      {
        id: 14,
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
      },
    ],
  },
  {
    title: "What best describes your business? ",
    questions: [
      {
        id: 15,
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
      },
    ],
  },
  {
    title: "Business stage",
    questions: [
      {
        id: 16,
        type: questionTypes.CHOICES,
        options: [
          {
            text: "Pre - revenue",
          },
          {
            text: "Revenue generating",
          },
        ],
      },
      {
        id: 17,
        type: questionTypes.TEXT_INPUT,
        question: "What was the topline revenue last year (2023/24) INR Lacs",
        placeholder: "In INR Lacs",
      },
      {
        id: 18,
        type: questionTypes.TEXT_INPUT,
        question: "Growth you targeting for this year?",
        placeholder: "In percentage",
      },
    ],
  },
  {
    title: "Business operations",
    questions: [
      {
        id: 19,
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
      },
      {
        id: 20,
        type: questionTypes.TEXT_INPUT,
        question: "Number of monthly paying customers (estimated)",
        placeholder: "In numbers",
      },
    ],
  },
  {
    title: "Export activity",
    questions: [
      {
        id: 21,
        type: questionTypes.CHOICES,
        question: "Does your business currently exports products/ services?",
        options: [
          {
            text: "Yes, Definately",
          },
          {
            text: "No, Not This Time",
          },
        ],
        textInput: { placeholder: "If Yes, to which countries?" },
      },
      {
        id: 22,
        type: questionTypes.TEXT_INPUT,
        question: "What percentage of your overall revenue comes from exports?",
        placeholder: "In numbers",
      },
    ],
  },
  {
    title: "Export activity",
    questions: [
      {
        id: 23,
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
    ],
  },
  {
    title: "International Presence",
    questions: [
      {
        id: 24,
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
            text: "Other",
          },
        ],
        textInput: { placeholder: "(Please specify)" },
      },
    ],
  },
  {
    title: "Select your preferred city for the workshop",
    questions: [
      {
        id: 25,
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
      },
    ],
  },
];
