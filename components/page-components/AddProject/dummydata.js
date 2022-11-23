export const DATA_FIELDS_NAMES = [
  { codename: 'technology', label: 'Technology' },
  { codename: 'seniorityLevel', label: 'Senority Level' },
];

export const DATA_FIELDS = {
  [DATA_FIELDS_NAMES[0].codename]: [
    { label: 'JavaScript', codename: 'javascript' },
    { label: 'AngularJS', codename: 'angularjs' },
    { label: 'ReactJS', codename: 'reactjs' },
    { label: 'React Native', codename: 'reactnative' },
    { label: 'NodeJS', codename: 'nodejs' },
    { label: 'GraphQL', codename: 'gql' },
    { label: 'Kentico', codename: 'kentico' },
    { label: 'Commercetools', codename: 'commercetools' },
  ],
  [DATA_FIELDS_NAMES[1].codename]: [
    { label: 'Junior', codename: 'junior' },
    { label: 'Junior-Mid', codename: 'junior-mid' },
    { label: 'Mid', codename: 'mid' },
    { label: 'Mid-Senior', codename: 'mid-senior' },
    { label: 'Senior', codename: 'senior' },
  ],
};
