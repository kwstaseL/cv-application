export const personalDetailsFields = [
  {
    title: "Personal Details",
    fields: [
      {
        label: "Full Name",
        input: "text",
        placeholder: "Enter your full name",
        recommended: false,
        valueKey: "fullName",
      },
      {
        label: "Location",
        input: "text",
        placeholder: "Enter your address/country",
        recommended: true,
        valueKey: "location",
      },
      {
        label: "Phone Number",
        input: "text",
        placeholder: "Enter your phone number",
        recommended: true,
        valueKey: "phoneNumber",
      },
      {
        label: "Email",
        input: "text",
        placeholder: "Enter your email",
        recommended: true,
        valueKey: "email",
      },
      {
        label: "Professional Summary",
        input: "textarea",
        valueKey: "professionalSummary",
      },
    ],
  },
];
// constants.js

export const educationDetailsFields = [
  {
    title: "Education Details",
    fields: [
      {
        label: "Degree",
        input: "text",
        placeholder: "Enter your degree",
        recommended: true,
        valueKey: "degree",
      },
      {
        label: "School/University",
        input: "text",
        placeholder: "Enter the name of the school/university",
        recommended: true,
        valueKey: "school",
      },
      {
        label: "Major",
        input: "text",
        placeholder: "Enter your major",
        recommended: true,
        valueKey: "major",
      },
      {
        label: "Graduation Year",
        input: "text",
        placeholder: "Enter your graduation year",
        recommended: true,
        isOngoing: false,
        valueKey: "gradYear",
      },
      {
        label: "GPA",
        input: "text",
        placeholder: "Enter your GPA",
        optional: true,
        valueKey: "gpa",
      },
      {
        label: "Honors/Awards",
        input: "text",
        placeholder: "Enter any honors or awards received",
        recommended: false,
        valueKey: "honors",
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
        valueKey: "jobTitle",
      },
      {
        label: "Company",
        input: "text",
        placeholder: "Enter the company name",
        recommended: true,
        valueKey: "company",
      },
      {
        label: "Location",
        input: "text",
        placeholder: "Enter the location (city, state)",
        recommended: true,
        valueKey: "location",
      },
      {
        label: "Start Date",
        input: "date",
        placeholder: "Enter the start date",
        recommended: true,
        valueKey: "startDate",
      },
      {
        label: "End Date",
        input: "date",
        placeholder: "Enter the end date",
        recommended: true,
        valueKey: "endDate",
      },
      {
        label: "Description",
        input: "textarea",
        placeholder: "Describe your responsibilities and achievements...",
        recommended: true,
        valueKey: "description",
      },
    ],
  },
];
