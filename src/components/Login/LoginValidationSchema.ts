import * as yup from "yup";

export const FIELD_LOGIN = "login";
export const FIELD_PASSWORD = "password";

export const LoginValidationSchema = yup.object().shape({
  [FIELD_LOGIN]: yup.string().trim().required(),
  [FIELD_PASSWORD]: yup.string().trim().required(),
});
