export const ROUTES = {
  // HOME: "/home",
  CURRENT_PROJECTS: "/current-projects",
  ADD_PROJECT: "/add-project",
  OTHER_PROJECTS: "/other-projects",
  SOURCE: "/source",
  FEEDBACK: "/feedback",
  GIVE_FEEDBACK: "/feedback/give-feedback",
  REQUEST_FEEDBACK: "/feedback/request-feedback",
  LOG: "/log",
  REGISTER: "/register",
  PROFILE: "/profile",
  MANAGE_EMPLOYEES: "/manage-employees",
};

export const getTitle = (route) => {
  let newRoute = route;

  if (route && route.includes("-")) {
    newRoute = newRoute.replace("-", " ");
  }

  if (route && route.length > 1) {
    newRoute = newRoute.replace("/", " - ");
  }

  if (route && route.length === 1) {
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

export const replaceAll = (fullString, stringToReplace, replacementString) => {
  if (!fullString.includes(stringToReplace)) return fullString;
  return replaceAll(
    fullString.replace(stringToReplace, replacementString),
    stringToReplace,
    replacementString,
  );
};

export const callAPI = async (path, body, method = "GET", callInternal = false) => {
  const config = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }
  const URL = callInternal ? `${process.env.NEXTJS_API}${path}` : `${process.env.HOST}${path}`;
  return await fetch(URL, config);
};

export const isArray = (what) => {
  return Object.prototype.toString.call(what) === "[object Array]";
};
