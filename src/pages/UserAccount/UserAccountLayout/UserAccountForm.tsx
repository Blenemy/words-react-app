import { memo } from "react";
import { CustomInput } from "../../../components/CustomInput/CustomInput";
import { handleInputChange } from "../../../utils/helpers";
import { UserAccountFormType } from "../UserAccountPage";
import { UserAccountButton } from "./UserAccountButton";

/**
 * UserAccountForm component for user account management.
 *
 * @component
 * @param {UserAccountFormProps} props - The props for the component.
 * @returns {JSX.Element} A memoized form component for user account data.
 */

type UserAccountFormProps = {
  formData: UserAccountFormType;
  setFormData: React.Dispatch<React.SetStateAction<UserAccountFormType>>;
  handleOnSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleOnCancel: () => void;
};

export const UserAccountForm: React.FC<UserAccountFormProps> = memo((props) => {
  const { formData, setFormData, handleOnSubmit, handleOnCancel } = props;

  const commonInputProps = {
    autoComplete: "off",
    classname: "text-primary",
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) =>
      handleInputChange(event, setFormData),
  };

  return (
    <form
      data-testid="form"
      className="flex flex-col gap-8 mb-10"
      onSubmit={handleOnSubmit}
    >
      <CustomInput
        placeholder="First Name"
        name={"first_name"}
        type={"text"}
        required
        value={formData.first_name}
        {...commonInputProps}
      />
      <CustomInput
        placeholder="Last name"
        name={"last_name"}
        type={"text"}
        required
        value={formData.last_name}
        {...commonInputProps}
      />
      <CustomInput
        placeholder="Email"
        name={"email"}
        type={"email"}
        required
        value={formData.email}
        {...commonInputProps}
      />
      <CustomInput
        placeholder="Password"
        name={"password"}
        type={"password"}
        required={false}
        value={formData.password}
        {...commonInputProps}
      />
      <div className="flex gap-[40px]">
        <UserAccountButton type="submit" text="Save" variant="primary" />
        <UserAccountButton
          type="reset"
          text="Cancel"
          handleOnClick={handleOnCancel}
          variant="secondary"
        />
      </div>
    </form>
  );
});
