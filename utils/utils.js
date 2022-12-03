export const ROUTES = {
  // HOME: "/home",
  CURRENT_PROJECT: "/current-project",
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

export const callAPI = async (path, body, method = "GET") => {
  const config = {
    method: method,
    // mode: "cors", // no-cors, *cors, same-origin
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      "Content-Type": "application/json",
      // Connection: "keep-alive",
      // "Accept-Encoding": "gzip, deflate, br",
      // Accept: "*/*",
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }
  const URL = `${process.env.HOST}${path}`;
  console.log("URL", URL);
  return await fetch(URL, config);
};
