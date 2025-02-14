import { Card } from "../store/cards/cardsSlice";

export enum questionTypes {
  TEXT_INPUT = "TEXT_INPUT",
  CHOICES = "CHOICES",
}

export const cardsData: Card[] = [
  {
    id: "c_1",
    title: "Enter Your Details",
    questions: [
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
    ],
  },
  {
    id: "c_2",
    title: "Business information",
    questions: [
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
        validation: { required: true, maxLength: 4, type: "number",pattern:/^\d{4}$/ },
      },
      {
        id: "q_8",
        type: questionTypes.TEXT_INPUT,
        label: "City of registeration*",
        validation: { required: true },
      },
    ],
  },
  {
    id: "c_3",
    title: "Socials",
    questions: [
      {
        id: "q_9",
        type: questionTypes.TEXT_INPUT,
        label: "Website URL",
        validation: {
          pattern:
            /^(https?:\/\/([\w-]+(\.[\w-]+)+)(\/[\w-.~:?#[\]@!$&'()*+,;=%]*)?|^$)$/i,
        },
      },
      {
        id: "q_10",
        type: questionTypes.TEXT_INPUT,
        label: "LinkedIn Profile",
        validation: {
          pattern:
            /^(https?:\/\/([\w-]+(\.[\w-]+)+)(\/[\w-.~:?#[\]@!$&'()*+,;=%]*)*\/?)?$/,
        },
      },
      {
        id: "q_11",
        type: questionTypes.TEXT_INPUT,
        label: "Other social media profile",
        validation: {
          pattern:
            /^(https?:\/\/([\w-]+(\.[\w-]+)+)(\/[\w-.~:?#[\]@!$&'()*+,;=%]*)?|^$)$/i,
        },
      },
    ],
  },
  {
    id: "c_4",
    title: "Business information",
    questions: [
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
              "c_13"
            ],
            removeQuestions: ["q_13"],
          },
          {
            if:["Private limited","Limited Liability Partnership","Partnership","Proprietorship"],
            removeCards:["c_5"]
          }
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
    ],
  },
  {
    id: "c_5",
    title: "What business idea are you working on?",
    questions: [
      {
        id: "q_14",
        type: questionTypes.TEXT_INPUT,
        multiline:true,
        question: "Describe in 100 words*",
        validation:{ required:true,maxLength:600}
      },
    ],
  },
  {
    id: "c_6",
    title: "Organisation size",
    questions: [
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
    ],
  },
  {
    id: "c_7",
    title: "What best describes your business? ",
    questions: [
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
    ],
  },
  {
    id: "c_8",
    title: "Business stage",
    questions: [
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
            removeQuestions: ["q_18", "q_19","q_21"],
            removeCards: ["c_10", "c_11","c_12"],
          },
        ],
      },
      {
        id: "q_18",
        type: questionTypes.TEXT_INPUT,
        question: "What was the topline revenue last year (2023/24) INR Lacs*",
        placeholder: "In INR Lacs",
        validation: { type: "number", required: true,max:1000 },
        unit: "Lacs",
      },
      {
        id: "q_19",
        type: questionTypes.TEXT_INPUT,
        question: "Growth percentage you are targeting for this year?*",
        placeholder: "In percentage",
        validation: { type: "number", min: 0, max: 100, required: true },
        unit: "%",
      },
    ],
  },
  {
    id: "c_9",
    title: "Business operations",
    questions: [
      {
        id: "q_20",
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
        id: "q_21",
        type: questionTypes.TEXT_INPUT,
        question: "Number of monthly paying customers (estimated)*",
        placeholder: "In numbers",
        validation: { required: true, type: "number" },
      },
    ],
  },
  {
    id: "c_10",
    title: "Export activity",
    questions: [
      {
        id: "q_22",
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
        question: "If Yes, to which countries?*",
        validation: { required: true },
      },
      {
        id: "q_24",
        type: questionTypes.TEXT_INPUT,
        question:
          "What percentage of your overall revenue comes from exports?*",
        placeholder: "In Percentage",
        unit:"%",
        validation: { type: "number", min: 0, max: 100, required: true },
      },
    ],
  },
  {
    id: "c_11",
    title: "Export activity",
    questions: [
      {
        id: "q_25",
        type: questionTypes.CHOICES,
        question:
          "What is your approximate monthly export sales volume? (select one)*",
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
    ],
  },
  {
    id: "c_12",
    title: "International Presence",
    questions: [
      {
        id: "q_26",
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
        condition: [
          {
            if: ["United States", "UAE", "Not at this point"],
            removeQuestions: ["q_27"],
          },
        ],
        // textInput: { placeholder: "(Please specify)" },
        validation: { required: true },
      },
      {
        id: "q_27",
        type: questionTypes.TEXT_INPUT,
        question: "Please Specify*",
        defaultHidden: true,
        validation: { required: true },
      },
    ],
  },
  {
    id: "c_13",
    title: "Select your preferred city for the workshop",
    questions: [
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
    ],
  },
];
