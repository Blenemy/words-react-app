import { CustomInput } from "../../components/CustomInput/CustomInput";
import { handleInputChange } from "../../utils/helpers";
import { UserAccountButton } from "./UserAccountButton";
import { UserAccountFromType } from "./UserAccountPage";

type UserAccountFormProps = {
  formData: UserAccountFromType;
  setFormData: React.Dispatch<React.SetStateAction<UserAccountFromType>>;
  handleOnSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleOnCancel: () => void;
};

export const UserAccountForm: React.FC<UserAccountFormProps> = (props) => {
  const { formData, setFormData, handleOnSubmit, handleOnCancel } = props;

  const commonInputProps = {
    autoComplete: "off",
    classname: "text-primary",
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) =>
      handleInputChange(event, setFormData),
  };

  return (
    <form className="flex flex-col gap-8 mb-10" onSubmit={handleOnSubmit}>
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
        <UserAccountButton type="submit" text="Save" color="primary" />
        <UserAccountButton
          type="reset"
          text="Cancel"
          color="violetStroke"
          transparent={true}
          handleOnCancel={handleOnCancel}
        />
      </div>
    </form>
  );
};
