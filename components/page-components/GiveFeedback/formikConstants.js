import * as yup from "yup";

export const INITIAL_VALUES = {
  PM: {
    dev: "",
    teamInteraction: 1,
    businessResults: null,
    clientSuccess: null,
    innovation: null,
    newSeniorityLevels: [],
    additionalFeedback: "",
  },
  DEV: {
    overallRating: 1,
    whatWentWell: "",
    whatCouldBeImproved: "",
  },
};

export const VALIDATE = {
  PM: yup.object({
    dev: yup.object(),
    teamInteraction: yup.number(),
    businessResults: yup.object({ label: yup.string(), codename: yup.string() }).nullable(true),
    clientSuccess: yup.object({ label: yup.string(), codename: yup.string() }).nullable(true),
    innovation: yup.object({ label: yup.string(), codename: yup.string() }).nullable(true),
    newSeniorityLevels: yup
      .array()
      .of(yup.object({ technology: yup.object(), seniorityLevel: yup.object() }))
      .nullable(true),
    additionalFeedback: yup.string(),
  }),
  DEV: yup.object({
    overallRating: yup.number(),
    whatWentWell: yup.string(),
    whatCouldBeImproved: yup.string(),
  }),
};
