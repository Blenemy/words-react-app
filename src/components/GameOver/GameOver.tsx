import { Feedback } from "../Feedback/Feedback";

export const GameOver = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 flex items-center justify-center self-center justify-self-center">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl flex flex-col">
            <div className="flex gap-4 self-center items-center">
              <span className="block">Great Job!</span>
              <div className="flex items-center justify-center">
                <span className="bg-green-300 p-3 rounded-full">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>

            <span className="block text-indigo-500">
              You have completed this deck!
            </span>
          </h2>
          <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
            We would appreciate if you rate our app in your personal account!
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <button
                type="button"
                className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      <Feedback />
    </>
  );
};
