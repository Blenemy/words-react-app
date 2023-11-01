import * as Yup from "yup";

export const authentificationSchema = Yup.object({
  username: Yup.string().required("required field"),
  password: Yup.string().required("required field"),
});
