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
    {
      label: "JavaScript",
      codename: "javascript",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      label: "AngularJS",
      codename: "angularjs",
      image: "https://angular.io/assets/images/logos/angular/angular.svg",
    },
    {
      label: "ReactJS",
      codename: "reactjs",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      label: "React Native",
      codename: "reactnative",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png",
    },
    {
      label: "NodeJS",
      codename: "nodejs",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
      label: "GraphQL",
      codename: "gql",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
    },
    {
      label: "Kentico",
      codename: "kentico",
      image: "https://logosmarken.com/wp-content/uploads/2022/03/Kentico-Emblem.png",
    },
    {
      label: "Commercetools",
      codename: "commercetools",
      image:
        "https://banner2.cleanpng.com/20181108/kiv/kisspng-commercetools-gmbh-logo-computer-software-online-m-commercetoolsampapos-next-generation-ecommerce-5be4377cddecf5.751618501541683068909.jpg",
    },
  ],
};

const OTHER_FIELDS = [
  { codename: "client", label: "Client" },
  { codename: "projectName", label: "Project Name" },
  { codename: "projectPeriod", label: "Project Period" },
  { codename: "technologies", label: "Technologies" },
  { codename: "requiredCapacity", label: "Required Capacity" },
  { codename: "repositories", label: "Repositories" },
  { codename: "slackChannels", label: "Slack Channels" },
  { codename: "accessZones", label: "Access Zones" },
];

export const ALL_FIELDS = [SENORITY_LEVELS, TECHNOLOGIES, ...OTHER_FIELDS];
