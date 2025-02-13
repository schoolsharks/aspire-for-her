import { Card } from "../store/cards/cardsSlice";

export enum questionTypes {
  TEXT_INPUT = "TEXT_INPUT",
  CHOICES = "CHOICES",
}


export const cardsData: Card[] = [
  {
    id:1,
    title: "Enter Your Details",
    questions: [
      {
        id: 1,
        type: questionTypes.TEXT_INPUT,
        label: "Founder’s Name*",
        validation: { required: true },
      },
      {
        id: 2,
        type: questionTypes.TEXT_INPUT,
        label: "Designation*",
        validation: { required: true },
      },
      {
        id: 3,
        type: questionTypes.TEXT_INPUT,
        label: "Business email address*",
        validation: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
      },
      {
        id: 4,
        type: questionTypes.TEXT_INPUT,
        label: "Contact number*",
        validation: { required: true, maxLength: 10, type: "number" },
      },
    ],
  },
  {
    id:2,
    title: "Business information",
    questions: [
      {
        id: 5,
        type: questionTypes.TEXT_INPUT,
        label: "Registered entity name*",
        validation: { required: true },
      },
      {
        id: 6,
        type: questionTypes.TEXT_INPUT,
        label: "Brand name*",
        validation: { required: true },
      },
      {
        id: 7,
        type: questionTypes.TEXT_INPUT,
        label: "Year of establishment*",
        validation: { required: true, maxLength: 4, type: "number" },
      },
      {
        id: 8,
        type: questionTypes.TEXT_INPUT,
        label: "City of registeration*",
        validation: { required: true },
      },
    ],
  },
  {
    id:3,
    title: "Socials",
    questions: [
      {
        id: 9,
        type: questionTypes.TEXT_INPUT,
        label: "Website URL",
        validation: {
          pattern:
            /^(https?:\/\/([\w-]+(\.[\w-]+)+)(\/[\w-.~:?#[\]@!$&'()*+,;=]*)?|^$)$/,
        },
      },
      {
        id: 10,
        type: questionTypes.TEXT_INPUT,
        label: "LinkedIn Profile",
        validation: {
          pattern:
            /^(https?:\/\/([\w-]+(\.[\w-]+)+)(\/[\w-.~:?#[\]@!$&'()*+,;=]*)?|^$)$/,
        },
      },
      {
        id: 11,
        type: questionTypes.TEXT_INPUT,
        label: "Other social media profile",
        validation: {
          pattern:
            /^(https?:\/\/([\w-]+(\.[\w-]+)+)(\/[\w-.~:?#[\]@!$&'()*+,;=]*)?|^$)$/,
        },
      },
    ],
  },
  {
    id:4,
    title: "Business information",
    questions: [
      {
        id: 12,
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
        id: 13,
        type: questionTypes.TEXT_INPUT,
        question: "What percentage of your business do women founders own?*",
        placeholder: "In percentage",
        unit:"%",
        validation: { required: true, type: "number", max: 100, min: 0 },
      },
    ],
  },
  {
    id:5,
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
        validation: { required: true },
      },
    ],
  },
  {
    id:6,
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
        validation: { required: true },
      },
    ],
  },
  {
    id:7,
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
        validation: { required: true },
        condition:{
          if:"Pre - revenue",
          removeQuestions:[17,18]
        }
      },
      {
        id: 17,
        type: questionTypes.TEXT_INPUT,
        question: "What was the topline revenue last year (2023/24) INR Lacs",
        placeholder: "In INR Lacs",
        validation: { type: "number" },
        unit:"Lacs"
      },
      {
        id: 18,
        type: questionTypes.TEXT_INPUT,
        question: "Growth you targeting for this year?",
        placeholder: "In percentage",
        validation: { type: "number", min: 0, max: 100 },
        unit:"%"

      },
    ],
  },
  {
    id:8,
    title: "Business operations",
    questions: [
      {
        id: 19,
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
        id: 20,
        type: questionTypes.TEXT_INPUT,
        question: "Number of monthly paying customers (estimated)*",
        placeholder: "In numbers",
        validation: { required: true,type:"number" },
      },
    ],
  },
  {
    id:9,
    title: "Export activity",
    questions: [
      {
        id: 21,
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
        validation:{required:true},
        condition:{
          if:"No, Not This Time",
          removeCards:[10],
          removeQuestions:[22]
        }
      },
      {
        id: 22,
        type: questionTypes.TEXT_INPUT,
        question: "What percentage of your overall revenue comes from exports?",
        placeholder: "In numbers",
        validation: { type:"number",min:0,max:100 },
      },
    ],
  },
  {
    id:10,
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
    id:11,
    title: "International Presence",
    questions: [
      {
        id: 24,
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
        validation: { required:true },
      },
    ],
  },
  {
    id:12,
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
        validation: { required:true },
      },
    ],
  },
];
