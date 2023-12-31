import { CustomInput } from "../../../components/CustomInput/CustomInput";
import { RedirectNotification } from "../../../components/RedirectNotification/RedirectNotification";
import { ROUTE_HOME } from "../../../constants/routes";
import { useAuth } from "../../../hooks/useAuth";
import cn from "classnames";

/**
 * Компонент, который рендерит форму авторизации для входа в систему.
 *
 * Использует formik для управления состоянием формы и валидации, пользовательский компонент ввода,
 * и компонент уведомления для перенаправления после успешного входа.
 *
 * @returns {React.ReactElement} Компонент формы авторизации.
 */

export const AuthorizationForm = () => {
  const { isLoading, formik, showAlert, error } = useAuth();

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col font-['Roboto_flex'] mb-8 w-[424px]"
    >
      <h3 className="mb-[52px] text-3xl text-center font-medium">Sign in</h3>
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
      </div>
      <button
        type="submit"
        className={cn(
          "bg-lilackButton rounded-3xl w-full py-2 text-primary font-semibold border-2 border-primary",
          {
            "mb-3": showAlert,
          }
        )}
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Sign in"}
      </button>
      {showAlert && (
        <RedirectNotification seconds={3} redirectTo={ROUTE_HOME} />
      )}
      {error && error.response && (
        <div className="text-red-500">{error.response.data.error}</div>
      )}
    </form>
  );
};
