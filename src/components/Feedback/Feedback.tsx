import { v4 as uuidv4 } from "uuid";
import cn from "classnames";

/**
 * Компонент для отображения формы обратной связи. Готовый компонент, который взят из tailwind
 *
 * @returns {JSX.Element} - JSX элемент для формы обратной связи.
 */

import { FormEvent, memo, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../data/constants";
import Cookies from "js-cookie";
import { Alert } from "../Alert/Alert";

const ratings = [1, 2, 3, 4, 5];

export const Feedback = memo((): JSX.Element => {
  const [selectedRating, setSelectedRating] = useState<number>(3);
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
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
      const response = axios.post(
        BASE_URL + "/social/comments/",
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

      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setSelectedRating(3);
      setInputValue("");
    }
  };

  return (
    <form
      className="flex-col items-center bg-gray-700 pb-14 relative"
      onSubmit={handleOnSubmit}
    >
      <header className="w-full bg-gray-800">
        <h1 className="text-center py-5 text-green-400 text-3xl font-bold">
          Feedback UI
        </h1>
      </header>
      <div className="w-3/4 md:w-2/5 mx-auto mt-10 ">
        <div className="bg-white p-10 rounded-xl">
          <h1 className="text-center text-2xl font-semibold text-gray-500">
            How would you rate your service with us?
          </h1>
          <div className="flex flex-wrap justify-center mt-10 space-x-3">
            {ratings.map((item) => (
              <option
                value="1"
                className={cn(
                  "flex items-center justify-center w-10 h-10 bg-gray--100 text-gray-600 hover:bg-green-500 transition duration-150 rounded-full font-bold hover:text-green-50 cursor-pointer",
                  {
                    "bg-green-500": selectedRating === item,
                    "text-green-50": selectedRating === item,
                  }
                )}
                onClick={() => handleRatingClick(item)}
                key={uuidv4()}
              >
                {item}
              </option>
            ))}
          </div>
          <div className="mt-8">
            <div className="flex justify-center border-2 py-2 px-6 rounded-xl">
              <input
                type="text"
                value={inputValue}
                placeholder="Write a new review"
                className="w-full outline-none text-gray-700 text-lg"
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button
                type="submit"
                className="bg-green-500 text-green-50 font-semibold px-6 py-2 rounded-xl text-md"
              >
                Send
              </button>
            </div>
            <span
              className={cn(
                "text-center block mt-6 text-gray-400 text-xl font-semibold",
                {
                  "text-red-600": error,
                }
              )}
            >
              Text must be at leat 10 characters
            </span>
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <p className="text-white text-lg font-semibold">3 Reviews</p>
          <p className="text-white text-lg font-semibold">
            Average Rating: 8.7
          </p>
        </div>
      </div>
      {isShowAlert && <Alert setShowAlert={setShowAlert} />}
    </form>
  );
});
