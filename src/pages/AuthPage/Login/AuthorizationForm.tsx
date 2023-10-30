import { CustomInput } from "../../../components/CustomInput/CustomInput";
import { GlobalLoader } from "../../../components/Loaders/GlobalLoader";
import { useAuth } from "../../../hooks/useAuth";
import { handleInputChange } from "../../../utils/helpers";

export const AuthorizationForm = () => {
  const { formData, setFormData, handleOnSubmit, error, isLoading } = useAuth();

  if (isLoading) {
    return <GlobalLoader />;
  }

  return (
    <form
      onSubmit={handleOnSubmit}
      className="flex flex-col font-['Roboto_flex'] mb-8 w-[424px]"
    >
      <h3 className="mb-[52px] text-3xl text-center font-medium">Sign in</h3>
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
        />
      </div>
      <button
        type="submit"
        className="bg-lilackButton rounded-3xl w-full py-2 text-primary font-semibold border-2 border-primary"
      >
        Sign in
      </button>
      {error && <div className="text-red-500">{error}</div>}
    </form>
  );
};
