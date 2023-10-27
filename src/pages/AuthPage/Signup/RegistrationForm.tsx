import { CustomInput } from "../../../components/CustomInput/CustomInput";
import { useRegistration } from "../../../hooks/useRegistration";
import { handleInputChange } from "../../../utils/helpers";

export const RegistrationForm = () => {
  const { formData, setFormData, handleOnSubmit, fieldErrors } =
    useRegistration();

  return (
    <form
      onSubmit={handleOnSubmit}
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
          required
          value={formData.username}
          onChangeHandler={(event: Event) =>
            handleInputChange(event, setFormData)
          }
          autoComplete="off"
          classname="w-[424px]"
        />
        <CustomInput
          placeholder="Email"
          name={"email"}
          type={"email"}
          required
          value={formData.email}
          onChangeHandler={(event: Event) =>
            handleInputChange(event, setFormData)
          }
          autoComplete="off"
          classname="w-[424px]"
          error={fieldErrors.email}
        />
        <CustomInput
          placeholder="Password"
          name={"password"}
          type={"password"}
          required
          value={formData.password}
          onChangeHandler={(event: Event) =>
            handleInputChange(event, setFormData)
          }
          autoComplete="off"
          classname="w-[424px]"
          error={fieldErrors.password}
        />
        <CustomInput
          placeholder="Confirm password"
          name={"confirmPassword"}
          type={"password"}
          required
          value={formData.confirmPassword}
          onChangeHandler={(event: Event) =>
            handleInputChange(event, setFormData)
          }
          autoComplete="off"
          classname="w-[424px]"
          error={fieldErrors.password}
        />
      </div>
      <button
        type="submit"
        className="bg-lilackButton rounded-3xl w-full py-2 text-primary font-semibold border-2 border-primary"
      >
        Sign up
      </button>
      {fieldErrors.message && <div>{fieldErrors.message}</div>}
    </form>
  );
};
