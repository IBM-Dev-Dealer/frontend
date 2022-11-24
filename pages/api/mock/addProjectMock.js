import { generateNumbers } from "../../../utils/utils";

const SENORITY_LEVELS = {
  codename: "seniorityLevel",
  label: "Senority Level",
  fields: [
    { label: "Junior", codename: "junior" },
    { label: "Junior-Mid", codename: "junior-mid" },
    { label: "Mid", codename: "mid" },
    { label: "Mid-Senior", codename: "mid-senior" },
    { label: "Senior", codename: "senior" },
  ],
};

const TECHNOLOGIES = {
  codename: "technology",
  label: "Technology",
  fields: [
    { label: "JavaScript", codename: "javascript" },
    { label: "AngularJS", codename: "angularjs" },
    { label: "ReactJS", codename: "reactjs" },
    { label: "React Native", codename: "reactnative" },
    { label: "NodeJS", codename: "nodejs" },
    { label: "GraphQL", codename: "gql" },
    { label: "Kentico", codename: "kentico" },
    { label: "Commercetools", codename: "commercetools" },
  ],
};

export const ALL_FIELDS = [SENORITY_LEVELS, TECHNOLOGIES];

export const TECHNOLOGIES_DATA_FIELDS = [TECHNOLOGIES, SENORITY_LEVELS];

export const CAPACITY_DATA_FIELDS = [
  { codename: "devnumber", label: "No. of devs", fields: generateNumbers(100) },
  SENORITY_LEVELS,
];
