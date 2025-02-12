export const enum questionTypes {
  TEXT_INPUT = "TEXT_INPUT",
  CHOICES = "CHOICES",
}

interface TextQuestion{
    id:number,
    question?:string,
    type:questionTypes.TEXT_INPUT,
    placeholder:string,
}
interface ChoicesQuestion{
    id:number,
    type:questionTypes.CHOICES,
    question?:string,
    options:{text:string,subtext?:string}[],
}

export type Question = TextQuestion | ChoicesQuestion

export interface Card{
    title:string,
    questions:Question[]
}

export const cardsData:Card[] = [
  {
    title: "Enter Your Details",
    questions: [
      {
        id: 1,
        type: questionTypes.TEXT_INPUT,
        placeholder: "Founder’s Name*",
      },
      {
        id: 2,
        type: questionTypes.TEXT_INPUT,
        placeholder: "Designation",
      },
      {
        id: 3,
        type: questionTypes.TEXT_INPUT,
        placeholder: "Business email address",
      },
      {
        id: 4,
        type: questionTypes.TEXT_INPUT,
        placeholder: "Contact number",
      },
    ],
  },
  {
    title: "Business information",
    questions: [
      {
        id: 5,
        type: questionTypes.TEXT_INPUT,
        placeholder: "Registered entity name",
      },
      {
        id: 6,
        type: questionTypes.TEXT_INPUT,
        placeholder: "Brand name",
      },
      {
        id: 7,
        type: questionTypes.TEXT_INPUT,
        placeholder: "Year of establishment",
      },
      {
        id: 8,
        type: questionTypes.TEXT_INPUT,
        placeholder: "City of registeration",
      },
    ],
  },
  {
    title: "Socials",
    questions: [
      {
        id: 9,
        type: questionTypes.TEXT_INPUT,
        placeholder: "Website URL",
      },
      {
        id: 10,
        type: questionTypes.TEXT_INPUT,
        placeholder: "LinkedIn Profile",
      },
      {
        id: 11,
        type: questionTypes.TEXT_INPUT,
        placeholder: "Other social media profile",
      },
    ],
  },
  {
    title: "Socials",
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
            text: "Professional & Business Consulting",
            subtext: "HR, tax advisory, legal services, corporate training",
          },
          {
            text: "Financial & Legal Services",
            subtext: "Accounting, financial planning, investment advisory",
          },
          {
            text: "Hospitality & Tourism",
            subtext: "Travel planning, event management, destination marketing",
          },
          {
            text: "Hospitality & Tourism",
            subtext: "Travel planning, event management, destination marketing",
          },
        ],
      },
    ],
  },
  {
    title: "What best describes your business? ",
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
];
