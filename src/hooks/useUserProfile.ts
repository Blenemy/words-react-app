import { useCallback, useState } from "react";
import { UserFromServer } from "../types/UserFromServer";
import { useAppDispatch } from "../app/hooks";
import { setUser } from "../features/userSlice";
import Cookies from "js-cookie";
import { UserAccountFormType } from "../pages/UserAccount/UserAccountPage";
import { useMutation, useQuery } from "@tanstack/react-query";
import { updateuserInfo } from "../api/updateUserInfo";
import { getUser } from "../api/getUser";

export const useUserProfile = (
  token: string | undefined,
  user: UserFromServer | null
) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<UserAccountFormType>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const { isLoading: isUserUpdated, mutateAsync } = useMutation({
    mutationFn: (data: {
      token: string | undefined;
      base64?: string | ArrayBuffer | null;
      formData?: UserAccountFormType;
    }) => updateuserInfo(data.token, data.base64, data.formData),
    onSuccess: (payload) => {
      if (payload.token) {
        Cookies.set("token", payload.token, { expires: 1 });
      }
      dispatch(setUser(payload));
    },
  });

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const { first_name, last_name, email } = user || {};

    const dataToSend: UserAccountFormType = {
      first_name: formData.first_name || first_name,
      last_name: formData.last_name || last_name,
      email: formData.email || email,
      password: formData.password ? formData.password : undefined,
    };

    mutateAsync({ token, formData: dataToSend });
  };

  const { isLoading } = useQuery({
    queryFn: () => getUser(token),
    onSuccess: (payload) => {
      dispatch(setUser(payload));
      setFormData((prev) => ({
        ...prev,
        first_name: payload.first_name,
        last_name: payload.last_name,
        email: payload.email,
      }));
    },
  });

  const handleFileChange = useCallback(
    (event: any) => {
      const data = new FileReader();
      data.addEventListener("load", () => {
        mutateAsync({ token, base64: data.result });
      });
      data.readAsDataURL(event.target.files[0]);
    },
    [token, mutateAsync]
  );

  const handleOnCancel = useCallback(() => {
    setFormData((prev) => ({
      ...prev,
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
      email: user?.email || "",
    }));
  }, [user]);

  return {
    formData,
    setFormData,
    handleOnSubmit,
    handleFileChange,
    isUserUpdated,
    handleOnCancel,
    isLoading,
  };
};
