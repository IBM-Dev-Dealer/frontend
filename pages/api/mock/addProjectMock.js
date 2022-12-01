const SENORITY_LEVELS = {
  codename: "seniorityLevel",
  label: "Seniority",
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

const OTHER_FIELDS = [
  { codename: "client", label: "Client" },
  { codename: "projectName", label: "Project Name" },
  { codename: "projectDuration", label: "Project Duration" },
  { codename: "technologies", label: "Technologies" },
  { codename: "requiredCapacity", label: "Required Capacity" },
  { codename: "repositories", label: "Repositories" },
  { codename: "slackChannels", label: "Slack Channels" },
  { codename: "accessZones", label: "Access Zones" },
];

export const ALL_FIELDS = [SENORITY_LEVELS, TECHNOLOGIES, ...OTHER_FIELDS];
