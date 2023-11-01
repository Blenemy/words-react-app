import * as Yup from "yup";

export const registrationSchema = Yup.object({
  username: Yup.string()
    .required("required field")
    .min(4, "Username must be at least 4 characters"),
  email: Yup.string()
    .test("domain", "Корабель там 🖕", (value) => {
      return !value?.endsWith(".ru") && !value?.endsWith(".by");
    })
    .matches(
      /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "enter valid email"
    )
    .required("required field"),
  password: Yup.string()
    .required("required field")
    .min(4, "Password must be at least 4 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null as any], "Passwords don't match")
    .required("required field"),
});
