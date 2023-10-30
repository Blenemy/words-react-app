import { UserFromServer } from "../../../types/UserFromServer";
import userDefault from "../../../assets/user-acc.svg";
import camera from "../../../assets/camera.svg";
import { memo } from "react";

type UserPhotoProps = {
  user: UserFromServer | null;
  handleFileChange: (event: any) => void;
};

export const UserPhoto: React.FC<UserPhotoProps> = memo(
  ({ user, handleFileChange }) => {
    return (
      <div className="flex justify-between px-24 mb-3 items-center">
        <div className="flex gap-8 items-center justify-center">
          <div className="relative">
            <img
              src={user?.avatar || userDefault}
              alt="ProfilePhoto"
              className="rounded-[50%] object-cover h-[153px] w-[153px] border-4 border-wave"
            />
            <label htmlFor="avatarInput">
              <img
                src={camera}
                alt="camera"
                className="absolute bottom-[0] right-[-5px] w-[32px] h-[32px] cursor-pointer"
              />
            </label>
            <input
              type="file"
              id="avatarInput"
              onChange={handleFileChange}
              className="hidden"
              accept="image/*"
            />
          </div>
          <div>
            <p className="text-primary font-['Roboto_flex'] text-2xl">
              {user?.first_name} {user?.last_name}
            </p>
            <p className="text-primary font-['Roboto_flex'] text-[20px]">
              {user?.email}
            </p>
          </div>
        </div>
      </div>
    );
  }
);
