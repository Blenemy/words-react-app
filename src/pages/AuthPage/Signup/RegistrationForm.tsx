import { CustomInput } from "../../../components/CustomInput/CustomInput";
import { RedirectNotification } from "../../../components/RedirectNotification/RedirectNotification";
import { ROUTE_AUTHORIZATION } from "../../../data/constants";
import { useRegistration } from "../../../hooks/useRegistration";

/**
 * Компонент для управления процессом регистрации пользователя.
 *
 * Содержит поля формы для имени пользователя, электронной почты, пароля и подтверждения пароля.
 * Использует хук `useRegistration` для управления состоянием формы и отправки формы регистрации.
 * При успешной регистрации отображается уведомление с перенаправлением.
 *
 * @returns {React.ReactElement} Компонент формы регистрации.
 */

export const RegistrationForm = () => {
  const { formik, showAlert, isLoading, error } = useRegistration();

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col font-['Roboto_flex'] mb-8 w-[424px]"
    >
      <h3 className="mb-[52px] text-3xl text-center font-medium">
        Create an account
      </h3>
      <div className="flex flex-col gap-8 mb-[52px]">
        <CustomInput
          placeholder="Username"
          name={"username"}
          type={"text"}
          value={formik.values.username}
          onChangeHandler={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="off"
          classname="w-[424px]"
          error={formik.touched.username && formik.errors.username}
        />
        <CustomInput
          placeholder="Email"
          name={"email"}
          type={"email"}
          value={formik.values.email}
          onChangeHandler={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="off"
          classname="w-[424px]"
          error={formik.touched.email && formik.errors.email}
        />
        <CustomInput
          placeholder="Password"
          name={"password"}
          type={"password"}
          value={formik.values.password}
          onChangeHandler={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="off"
          classname="w-[424px]"
          error={formik.touched.password && formik.errors.password}
          showPassIcon
        />
        <CustomInput
          placeholder="Confirm password"
          name={"confirmPassword"}
          type={"password"}
          value={formik.values.confirmPassword}
          onChangeHandler={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="off"
          classname="w-[424px]"
          error={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
          showPassIcon
        />
      </div>
      <button
        type="submit"
        className="bg-lilackButton rounded-3xl w-full py-2 text-primary font-semibold border-2 border-primary mb-3"
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Sign up"}
      </button>
      {showAlert && (
        <RedirectNotification seconds={3} redirectTo={ROUTE_AUTHORIZATION} />
      )}
      {error && error.response && (
        <div className="text-red-500">{error.response.data.email}</div>
      )}
    </form>
  );
};
