/**
 * Компонент для отображения формы обратной связи. Готовый компонент, который взят из tailwind
 *
 * @returns {JSX.Element} - JSX элемент для формы обратной связи.
 */

export const Feedback = (): JSX.Element => {
  return (
    <div className="flex-col items-center bg-gray-700">
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
            <option
              value="1"
              className="flex items-center justify-center w-10 h-10 bg-gray--100 text-gray-600 hover:bg-green-500 transition duration-150 rounded-full font-bold hover:text-green-50 cursor-pointer"
            >
              1
            </option>
            <option
              value="2"
              className="flex items-center justify-center w-10 h-10 bg-gray--100 text-gray-600 hover:bg-green-500 transition duration-150 rounded-full font-bold hover:text-green-50 cursor-pointer"
            >
              2
            </option>
            <option
              value="3"
              className="flex items-center justify-center w-10 h-10 bg-gray--100 text-gray-600 hover:bg-green-500 transition duration-150 rounded-full font-bold hover:text-green-50 cursor-pointer"
            >
              3
            </option>
            <option
              value="4"
              className="flex items-center justify-center w-10 h-10 bg-gray--100 text-gray-600 hover:bg-green-500 transition duration-150 rounded-full font-bold hover:text-green-50 cursor-pointer"
            >
              4
            </option>
            <option
              value="5"
              className="flex items-center justify-center w-10 h-10 bg-gray--100 text-gray-600 hover:bg-green-500 transition duration-150 rounded-full font-bold hover:text-green-50 cursor-pointer"
            >
              5
            </option>
          </div>
          <form className="mt-8">
            <div className="flex justify-center border-2 py-2 px-6 rounded-xl">
              <input
                type="text"
                placeholder="Write a new review"
                className="w-full outline-none text-gray-700 text-lg"
              />
              <button
                type="submit"
                className="bg-green-500 text-green-50 font-semibold px-6 py-2 rounded-xl text-md"
              >
                Send
              </button>
            </div>
            <span className="text-center block mt-6 text-gray-400 text-xl font-semibold">
              Text must be at leat 10 characters
            </span>
          </form>
        </div>
        <div className="flex justify-between my-8">
          <p className="text-white text-lg font-semibold">3 Reviews</p>
          <p className="text-white text-lg font-semibold">
            Average Rating: 8.7
          </p>
        </div>
        <div className="space-y-6 pb-10">
          <div>
            <div className="relative bg-white p-10 rounded-xl">
              <p className="text-lg text-gray-600">This is Feedback item 1</p>
              <span className="absolute bg-green-500 w-14 h-14 flex items-center justify-center font-bold text-green-50 rounded-full -top-6 -left-6">
                10
              </span>
              <div className="absolute top-0 right-0 flex space-x-2 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 bg-green-50 rounded-full text-green-500 mb-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};
