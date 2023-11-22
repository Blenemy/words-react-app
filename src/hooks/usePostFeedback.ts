import { FormEvent, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export const usePostFeedback = () => {
  const [error, setError] = useState<boolean>(false);
  const [selectedRating, setSelectedRating] = useState<number>(3);
  const [inputValue, setInputValue] = useState<string>("");
  const [isShowAlert, setShowAlert] = useState(false);
  const token = Cookies.get("token");

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue.length < 10) {
      setError(true);
      return;
    }

    try {
      axios.post(
        process.env.REACT_APP_API_BASE_URL + "/social/comments/",
        {
          rating: selectedRating,
          message: inputValue,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setError(false);
      setShowAlert(true);
    } catch (error) {
      console.log(error);
    } finally {
      setSelectedRating(3);
      setInputValue("");
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowAlert(false);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [isShowAlert]);

  return {
    error,
    handleOnSubmit,
    inputValue,
    setInputValue,
    isShowAlert,
    setShowAlert,
    handleRatingClick,
    selectedRating,
  };
};
