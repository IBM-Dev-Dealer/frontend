export const ROUTES = {
  DEFAULT_PAGE: '/',
  CURRENT_PROJECT: '/current-project',
  ADD_PROJECT: '/add-project',
  OTHER_PROJECTS: '/other-projects',
  SOURCE: '/source',
  LOG: '/log',
  REGISTER: '/register',
  PROFILE: '/profile',
  MANAGE_EMPLOYEES: '/manage-employees',
};

export const getPageBackground = (currentRoute) => {
  switch (currentRoute) {
    case ROUTES.DEFAULT_PAGE:
      return 1;
    case ROUTES.CURRENT_PROJECT:
    case ROUTES.ADD_PROJECT:
      return 2;
    case ROUTES.OTHER_PROJECTS:
      return 3;
    case ROUTES.SOURCE:
      return 4;
    case ROUTES.PROFILE:
      return 5;
    case ROUTES.MANAGE_EMPLOYEES:
      return 6;
    case ROUTES.LOG:
    case ROUTES.REGISTER:
      return 7;
    default:
      return;
  }
};

export const getTitle = (route) => {
  let newRoute = route;

  if (route.includes('-')) {
    newRoute = newRoute.replace('-', ' ');
  }

  if (route.length > 1) {
    newRoute = newRoute.replace('/', ' - ');
  }

  if (route.length === 1) {
    newRoute = newRoute.replace('/', '');
  }

  return `IBM Dev Dealer${newRoute}`;
};

export const classNames = (...classes) => classes.join(' ');
