export const ROUTES = {
  DEFAULT_PAGE: "/",
  CURRENT_PROJECT: "/current-project",
  ADD_PROJECT: "/add-project",
  OTHER_PROJECTS: "/other-projects",
  SOURCE: "/source",
  FEEDBACK: "/feedback",
  LOG: "/log",
  REGISTER: "/register",
  PROFILE: "/profile",
  MANAGE_EMPLOYEES: "/manage-employees",
};

export const getTitle = (route) => {
  let newRoute = route;

  if (route.includes("-")) {
    newRoute = newRoute.replace("-", " ");
  }

  if (route.length > 1) {
    newRoute = newRoute.replace("/", " - ");
  }

  if (route.length === 1) {
    newRoute = newRoute.replace("/", "");
  }

  return `IBM Dev Dealer${newRoute}`;
};

export const colorizeJSXArray = (JSXElements) => {
  let i = 0;
  const returned = JSXElements.map((element) => {
    if (!element) return element;
    i++;
    if (i === 7) {
      i = 0;
    }
    return {
      ...element,
      props: {
        ...element.props,
        className: element.props.className
          ? `${element.props.className} mainColorBg${i + 1}`
          : `mainColorBg${i + 1}`,
      },
    };
  });
  return returned.filter((el) => el);
};

export const generateNumbers = (maxLimit) => {
  const nums = [];
  for (let i = 1; i <= maxLimit; i++) {
    nums.push({ label: i, codename: i });
  }
  return nums;
};
