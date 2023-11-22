import { v4 as uuidv4 } from "uuid";
import cn from "classnames";
import { memo } from "react";
import { Alert } from "../Alert/Alert";
import { usePostFeedback } from "../../hooks/usePostFeedback";

/**
 * Компонент для отображения формы обратной связи. Готовый компонент, который взят из tailwind
 *
 * @returns {JSX.Element} - JSX элемент для формы обратной связи.
 */

const ratings = [1, 2, 3, 4, 5];

export const Feedback = memo((): JSX.Element => {
  const {
    error,
    handleOnSubmit,
    inputValue,
    setInputValue,
    isShowAlert,
    setShowAlert,
    handleRatingClick,
    selectedRating,
  } = usePostFeedback();

  return (
    <form
      className="flex-col items-center bg-gray-700 pb-14 relative grow h-full"
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
      </div>
      {isShowAlert && <Alert setShowAlert={setShowAlert} />}
    </form>
  );
});
