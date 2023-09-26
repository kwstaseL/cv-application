export const personalDetailsFields = [
  {
    title: "Personal Details",
    fields: [
      {
        label: "Full Name",
        input: "text",
        placeholder: "Enter your full name",
        recommended: false,
        value: "Full Name", // Set the label as the default value
      },
      {
        label: "Location",
        input: "text",
        placeholder: "Enter your address/country",
        recommended: true,
        value: "Address", // Set the label as the default value
      },
      {
        label: "Phone Number",
        input: "text",
        placeholder: "Enter your phone number",
        recommended: true,
        value: "Phone Number", // Set the label as the default value
      },
      {
        label: "Email",
        input: "text",
        placeholder: "Enter your email",
        recommended: true,
        value: "Email", // Set the label as the default value
      },
      {
        label: "Professional Summary",
        input: "textarea",
      },
    ],
  },
];

export const educationDetailsFields = [
  {
    title: "Education Details",
    fields: [
      {
        label: "Degree",
        input: "Text",
        placeholder: "Enter your degree",
        recommended: true,
        value: "Degree",
      },
      {
        label: "School/University",
        input: "text",
        placeholder: "Enter the name of the school/university",
        recommended: true,
        value: "University",
      },
      {
        label: "Major",
        input: "text",
        placeholder: "Enter your major",
        recommended: true,
        value: "Major",
      },
      {
        label: "Graduation Year",
        input: "text",
        placeholder: "Enter your graduation year",
        recommended: true,
        isOngoing: false,
        value: "Graduation Year",
      },
      {
        label: "GPA",
        input: "text",
        placeholder: "Enter your GPA",
        optional: true,
        value: "GPA",
      },
      {
        label: "Honors/Awards",
        input: "text",
        placeholder: "Enter any honors or awards received",
        recommended: false,
        value: "Honors",
      },
    ],
  },
];

export const experienceDetails = [
  {
    title: "Experience Details",
    fields: [
      {
        label: "Job Title",
        input: "text",
        placeholder: "Enter your job title",
        recommended: true,
        value: "job", // A meaningful default job title
      },
      {
        label: "Company",
        input: "text",
        placeholder: "Enter the company name",
        recommended: true,
        value: "company", // A meaningful default company name
      },
      {
        label: "Location",
        input: "text",
        placeholder: "Enter the location (city, state)",
        recommended: true,
        value: "location", // A meaningful default location
      },
      {
        label: "Start Date",
        input: "date",
        placeholder: "Enter the start date",
        recommended: true,
        value: "start date", // A meaningful default start date
      },
      {
        label: "End Date",
        input: "date",
        placeholder: "Enter the end date",
        recommended: true,
        value: "end date", // A meaningful default end date (if currently employed)
      },
      {
        label: "Description",
        input: "textarea",
        placeholder: "Describe your responsibilities and achievements...",
        recommended: true,
        value: "description", // A meaningful default description
      },
    ],
  },
];
