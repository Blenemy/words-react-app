import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setUser } from "../../features/userSlice";
import axios from "axios";
import { BASE_URL, ROUTE_AUTHORIZATION } from "../../data/constants";
import userDefault from "../../assets/user-acc.svg";
import camera from "../../images/camera.svg";
import { Loader } from "../../components/Loader/Loader";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { handleInputChange } from "../../utils/helpers";

export const UserAccountPage = () => {
  const token = Cookies.get("token");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);
  const [isLoading, setLoading] = useState(false);
  const location = useLocation();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (!token) {
      navigate(ROUTE_AUTHORIZATION, { state: { from: location.pathname } });
    }
  }, [navigate, token, location.pathname]);

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

  const handleLogOut = () => {
    Cookies.remove("token");
    dispatch(setUser(null));
    navigate(ROUTE_AUTHORIZATION);
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
      } else {
        console.error("Error during changing the avatar");
      }
    } catch (error) {
      console.error(`Error during sending the avatar: ${error}`);
    } finally {
      setLoading(false);
    }
  }

  const handleFileChange = (event: any) => {
    const data = new FileReader();
    data.addEventListener("load", () => {
      sendDataToServer(data.result);
    });
    data.readAsDataURL(event.target.files[0]);
  };

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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section>
      <div className="container my-0 mx-auto">
        <div className="py-6">
          <div className="flex justify-between px-24 mb-3">
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
                />
              </div>
              <div>
                <p className="text-primary font-['Roboto_flex'] text-2xl">
                  {formData.first_name} {formData.last_name}
                </p>
                <p className="text-primary font-['Roboto_flex'] text-[20px]">
                  {formData.email}
                </p>
              </div>
            </div>
            <div className="user-page__image relative">
              <img
                src={user?.avatar || userDefault}
                alt="ProfilePhoto"
                className="user-page__img rounded-[50%] object-cover h-[72px] w-[72px]"
              />
            </div>
          </div>
          <div className="flex gap-32">
            <div className="flex flex-col basis-2/5">
              <form
                action=""
                className="flex flex-col gap-8 mb-10"
                onSubmit={handleOnSubmit}
              >
                <CustomInput
                  placeholder="First Name"
                  name={"first_name"}
                  type={"text"}
                  required
                  value={formData.first_name}
                  onChangeHandler={(event: Event) =>
                    handleInputChange(event, setFormData)
                  }
                  autoComplete="off"
                  classname="text-primary"
                />
                <CustomInput
                  placeholder="Last name"
                  name={"last_name"}
                  type={"text"}
                  required
                  value={formData.last_name}
                  onChangeHandler={(event: Event) =>
                    handleInputChange(event, setFormData)
                  }
                  autoComplete="off"
                  classname="text-primary"
                />
                <CustomInput
                  placeholder="Email"
                  name={"email"}
                  type={"email"}
                  required
                  value={formData.email}
                  onChangeHandler={(event: Event) =>
                    handleInputChange(event, setFormData)
                  }
                  autoComplete="off"
                  classname="text-primary"
                />
                <CustomInput
                  placeholder="Password"
                  name={"password"}
                  type={"password"}
                  required={false}
                  value={formData.password}
                  onChangeHandler={(event: Event) =>
                    handleInputChange(event, setFormData)
                  }
                  autoComplete="off"
                  classname="text-primary"
                />
                <div className="flex gap-[40px]">
                  <button
                    type="submit"
                    className="w-[200px] h-10 flex items-center justify-center font-['Roboto_flex'] text-[20px] text-primary bg-lilackButton rounded-3xl border-2 border-primary"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="w-[200px] h-10 flex items-center justify-center font-['Roboto_flex'] text-[20px] text-violetStroke bg-lilackButton rounded-3xl border-2 border-violetStroke bg-transparent"
                  >
                    Cancel
                  </button>
                </div>
              </form>
              <p className="text-primary max-w-[424px]">
                It is recommended to learn at least{" "}
                <span className="text-wave">10 words every day</span> in order
                to improve your foreign language skills!
              </p>
            </div>
            <div className="text-primary basis-3/5">123</div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="bg-[#21212B] rounded-[10px] px-5 py-2 w-[fit-content] self-center"
        onClick={handleLogOut}
      >
        Sign out
      </button>
    </section>
  );
};
