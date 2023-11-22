import { FormEvent, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import { postReview, FeedbackType } from "../api/handleReviews";

export const usePostFeedback = () => {
  const [error, setError] = useState<boolean>(false);
  const [selectedRating, setSelectedRating] = useState<number>(3);
  const [inputValue, setInputValue] = useState<string>("");
  const [isShowAlert, setShowAlert] = useState(false);
  const token = Cookies.get("token");

  const { mutate, isLoading, isError } = useMutation(
    (newReview: FeedbackType) => postReview(newReview, token!),
    {
      onSuccess: () => {
        setShowAlert(true);
        setInputValue("");
        setSelectedRating(3);
      },
      onError: () => {
        setError(true);
      },
    }
  );

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.length < 10) {
      setError(true);
      return;
    }
    mutate({
      rating: selectedRating,
      message: inputValue,
    });
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
    isLoading,
    isError,
  };
};
