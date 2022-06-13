export const Data = [
  {
    id: "1",
    title: "Submit your Application",
    Resume: "true",
    data: [
      {
        id: 1,
        type: "text",
        title: "Full name",
        errorMessage:
          "Name should be 10-50 character and shouldn't include any special character or number",
        name: "fullName",
        pattern: /^[a-zA-Z ]{10,50}$/i,
        required: true,
      },
      {
        id: 2,
        type: "email",
        title: "Email",
        errorMessage: "Please enter a valid email address!",
        name: "email",
        pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
        required: true,
      },

      {
        id: 3,
        type: "tel",
        title: "Phone",
        errorMessage: "Please enter a valid phone number(with country code)",
        name: "phone",
        pattern: /^\+[1-9]{1}[0-9]{3,14}$/i,
        required: true,
      },
      {
        id: 4,
        type: "text",
        title: "Current company",
        errorMessage:
          "Company name Should be greater than 4 character and should not include any number and special character",
        pattern: /^[a-zA-Z ]{4,50}$/i,
        name: "currentCompany",
        required: false,
      },
    ],
  },
  {
    id: "2",
    title: "Links",
    data: [
      {
        id: 1,
        type: "text",
        title: "Linkdin URL",
        errorMessage: "Please enter a valid LinkdIn URL",
        name: "linkdIn",
        pattern: /http(s)?:\/\/([\w]+\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?/,
        required: false,
      },
      {
        id: 2,
        type: "text",
        title: "Twitter URL",
        errorMessage: "Please enter a valid Twitter URL",
        pattern: /http(s)?:\/\/([\w]+\.)?twitter\.com\/[A-z0-9_-]+\/?/,
        name: "twitter",
        required: false,
      },
      {
        id: 3,
        type: "text",
        title: "GitHub URL",
        errorMessage: "Please enter a valid GitHub URL",
        pattern: /http(s)?:\/\/([\w]+\.)?github\.com\/[A-z0-9_-]+\/?/,
        name: "gitHub",
        // pattern: "^[a-zA-Z ]{5,20}$",
        // required: true,
        required: false,
      },
      {
        id: 4,
        type: "text",
        title: "Portfolio URL",
        errorMessage: "Please enter a valid Portfolio URL",
        name: "portfolio",
        pattern:
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,

        required: false,
      },
      {
        id: 5,
        type: "text",
        title: "Other website",
        errorMessage: "Please enter a valid URL",
        name: "otherWebsite",
        pattern:
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,

        required: false,
      },
    ],
  },
];
