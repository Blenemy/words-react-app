import { useEffect, useState } from "react";
import { UserFromServer } from "../types/UserFromServer";
import { useAppDispatch } from "../app/hooks";
import axios from "axios";
import { BASE_URL } from "../data/constants";
import { setUser } from "../features/userSlice";
import Cookies from "js-cookie";
import { UserAccountFromType } from "../pages/UserAccount/UserAccountPage";

export const useUserProfile = (
  token: string | undefined,
  user: UserFromServer | null
) => {
  const [formData, setFormData] = useState<UserAccountFromType>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState(false);

  const handleFileChange = (event: any) => {
    const data = new FileReader();
    data.addEventListener("load", () => {
      sendDataToServer(data.result);
    });
    data.readAsDataURL(event.target.files[0]);
  };

  async function sendDataToServer(base64: string | ArrayBuffer | null) {
    try {
      setLoading(true);

      const dataToSend = {
        avatar: base64,
      };

      const response = await axios.patch(
        BASE_URL + "/user/profile/",
        dataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        dispatch(setUser(response.data));
      }
    } catch (error) {
      console.error(`Error during sending the avatar: ${error}`);
    } finally {
      setLoading(false);
    }
  }

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const dataToSend: any = {
      first_name: formData.first_name || user?.first_name,
      last_name: formData.last_name || user?.last_name,
      email: formData.email || user?.email,
    };

    if (formData.password) {
      dataToSend.password = formData.password;
    }

    try {
      const response = await axios.patch(
        BASE_URL + "/user/profile/",
        dataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (formData.password) {
        const newToken = response.data.token;

        Cookies.set("token", newToken, { expires: 1 });
      }

      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
      });

      dispatch(setUser(response.data));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleOnCancel = () => {
    setFormData((prev) => ({
      ...prev,
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
      email: user?.email || "",
    }));
  };

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
      }));
    }
  }, [user]);

  return {
    formData,
    setFormData,
    handleOnSubmit,
    handleFileChange,
    isLoading,
    handleOnCancel,
  };
};
