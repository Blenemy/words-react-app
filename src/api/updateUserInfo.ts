import axios from "axios";
import { BASE_URL } from "../data/constants";
import { UserAccountFormType } from "../pages/UserAccount/UserAccountPage";

export const updateuserInfo = async (
  token: string | undefined,
  base64?: string | ArrayBuffer | null,
  formData?: UserAccountFormType
) => {
  const dataToSend = {
    avatar: base64,
  };

  if (formData) {
    Object.assign(dataToSend, formData);
  }

  const request = await axios.patch(BASE_URL + "/user/profile/", dataToSend, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return request.data;
};
