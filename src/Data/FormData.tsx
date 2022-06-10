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
          "Name should be 5-20 character and shouldn't include any special character or number",
        name: "fullName",
        pattern: "^[a-zA-Z ]{10,20}$",
        required: true,
      },
      {
        id: 2,
        type: "email",
        title: "Email",
        errorMessage: "Please enter a valid email address!",
        name: "email",
        required: true,
      },

      {
        id: 3,
        type: "tel",
        title: "Phone",
        errorMessage: "Please enter a valid phone number",
        name: "phone",
        pattern: "^[0-9]{10}$",
        required: true,
      },
      {
        id: 4,
        type: "text",
        title: "Current company",
        errorMessage: "",
        name: "currentCompany",
        // pattern: "^[0-9]{10}$",
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
        // pattern: "^[a-zA-Z ]{5,20}$",
        // required: true,
      },
      {
        id: 2,
        type: "text",
        title: "Twitter URL",
        errorMessage: "Please enter a valid Twitter URL",
        name: "twitter",
        // pattern: "^[a-zA-Z ]{5,20}$",
        // required: true,
      },
      {
        id: 3,
        type: "text",
        title: "GitHub URL",
        errorMessage: "Please enter a valid GitHub URL",
        name: "gitHub",
        // pattern: "^[a-zA-Z ]{5,20}$",
        // required: true,
      },
      {
        id: 4,
        type: "text",
        title: "Portfolio URL",
        errorMessage: "Please enter a valid Portfolio URL",
        name: "portfolio",
        // pattern: "^[a-zA-Z ]{5,20}$",
        // required: true,
      },
      {
        id: 5,
        type: "text",
        title: "Other website",
        errorMessage: "Please enter a valid URL",
        name: "otherWebsite",
        // pattern: "^[a-zA-Z ]{5,20}$",
        // required: true,
      },
    ],
  },
];
