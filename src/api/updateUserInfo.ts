import { UserAccountFormType } from "../pages/UserAccount/UserAccountPage";
import { $host } from ".";

/**
 * Обновить информацию пользователя.
 *
 * @param {string | undefined} token - Токен пользователя.
 * @param {string | ArrayBuffer | null} base64 - Данные аватара пользователя в формате base64.
 * @param {UserAccountFormType} formData - Дополнительные данные пользователя.
 * @returns {Promise} Промис с обновленной информацией пользователя.
 */

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

  const request = await $host.patch("/user/profile/", dataToSend, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return request.data;
};
