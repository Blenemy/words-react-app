import { Dispatch, FormEvent, SetStateAction, memo } from "react";
import { useAppSelector } from "../../../app/hooks";
import { Loader } from "../../../components/Loaders/Loader";
import { DailyActivity } from "../UserAccountLayout/DailyActivity";
import { UserAccountForm } from "../UserAccountLayout/UserAccountForm";
import { UserPhoto } from "../UserAccountLayout/UserPhoto";
import { UserStatisctics } from "../UserAccountLayout/UserStatistics";
import { UserAccountFormType } from "../UserAccountPage";
import { useLogout } from "../../../hooks/useLogout";
import { useUpdateHeight } from "../../../hooks/useUpdateHight";

/**
 * UserAccountReview component that aggregates user account components.
 *
 * @component
 * @param {UserAccountReviewProps} props - The props for the component.
 * @returns {JSX.Element} A memoized component that renders user photo, daily activity,
 * user statistics chart, and account form for the user to review and update their account information.
 */

interface UserAccountReviewProps {
  handleFileChange: (event: any) => void;
  formData: UserAccountFormType;
  setFormData: Dispatch<SetStateAction<UserAccountFormType>>;
  handleOnSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  isUserUpdated: boolean;
  handleOnCancel: () => void;
}

export const UserAccountReview: React.FC<UserAccountReviewProps> = memo(
  ({
    handleFileChange,
    formData,
    setFormData,
    handleOnCancel,
    handleOnSubmit,
    isUserUpdated,
  }) => {
    const { user } = useAppSelector((state) => state.user);
    const { handleLogOut } = useLogout();
    const { viewportHeight } = useUpdateHeight();

    return (
      <section>
        <div
          className="container my-0 mx-auto"
          style={{ minHeight: viewportHeight }}
        >
          <div className="py-6">
            <div className="flex justify-between px-24 mb-3 items-center">
              <UserPhoto user={user} handleFileChange={handleFileChange} />
              <DailyActivity />
            </div>
            <div className="flex gap-32">
              <div className="flex flex-col basis-2/5">
                <UserAccountForm
                  handleOnSubmit={handleOnSubmit}
                  handleOnCancel={handleOnCancel}
                  formData={formData}
                  setFormData={setFormData}
                />

                <p className="text-primary max-w-[424px]">
                  It is recommended to learn at least{" "}
                  <span className="text-wave">10 words every day</span> in order
                  to improve your foreign language skills!
                </p>
              </div>
              <UserStatisctics />
            </div>
          </div>
          <button
            type="button"
            className="bg-[#21212B] rounded-[10px] px-5 py-2 w-[fit-content] self-center"
            onClick={handleLogOut}
          >
            Sign out
          </button>
        </div>
        {isUserUpdated && <Loader />}
      </section>
    );
  }
);
