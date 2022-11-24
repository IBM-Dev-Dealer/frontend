export const SENORITY_LEVELS = [
  { label: "Junior", codename: "junior" },
  { label: "Junior-Mid", codename: "junior-mid" },
  { label: "Mid", codename: "mid" },
  { label: "Mid-Senior", codename: "mid-senior" },
  { label: "Senior", codename: "senior" },
];

export const TECHNOLOGIES_DATA_FIELDS = [
  {
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
  },
  { codename: "seniorityLevel", label: "Senority Level", fields: SENORITY_LEVELS },
];

const generateNumbers = (maxLimit) => {
  const nums = [];
  for (let i = 0; i <= maxLimit; i++) {
    nums.push({ label: i, codename: i });
  }
  console.log(nums);
  return nums;
};

export const CAPACITY_DATA_FIELDS = [
  { codename: "devnumber", label: "No. of devs", fields: generateNumbers(100) },
  { codename: "seniorityLevel", label: "Senority Level", fields: SENORITY_LEVELS },
];
