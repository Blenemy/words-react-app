import { useAppSelector } from "../../../app/hooks";
import { Loader } from "../../../components/Loaders/Loader";
import { useUserProfile } from "../../../hooks/useUserProfile";
import { DailyActivity } from "../UserAccountLayout/DailyActivity";
import { UserAccountForm } from "../UserAccountLayout/UserAccountForm";
import { UserPhoto } from "../UserAccountLayout/UserPhoto";
import { UserStatisctics } from "../UserAccountLayout/UserStatistics";
import { useLogout } from "../../../hooks/useLogout";

export const UserAccountReview = () => {
  const { user } = useAppSelector((state) => state.user);
  const { token, handleLogOut } = useLogout();

  const {
    formData,
    setFormData,
    handleOnSubmit,
    handleFileChange,
    handleOnCancel,
    isUserUpdated,
    isLoading,
  } = useUserProfile(token, user);

  if (isLoading) {
    return null;
  }

  return (
    <section>
      <div className="container my-0 mx-auto mb-10 min-h-screen">
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
};
