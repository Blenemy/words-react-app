import { Dispatch, SetStateAction } from "react";

interface AlertProps {
  setShowAlert: Dispatch<SetStateAction<boolean>>;
}

export const Alert: React.FC<AlertProps> = ({ setShowAlert }): JSX.Element => {
  return (
    <div
      id="alert-additional-content-3"
      className="p-4 mb-4 text-green-800 border absolute bottom-0 right-0 w-80 border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
      role="alert"
    >
      <div className="flex items-center">
        <svg
          className="flex-shrink-0 w-4 h-4 mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <h3 className="text-lg font-medium">We Appreciate Your Feedback</h3>
      </div>
      <div className="mt-2 mb-4 text-sm">
        You can check out your feedback on the main page
      </div>
      <div className="flex">
        <button
          type="button"
          className="text-green-800 bg-transparent border border-green-800 hover:bg-green-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-green-600 dark:border-green-600 dark:text-green-400 dark:hover:text-white dark:focus:ring-green-800"
          data-dismiss-target="#alert-additional-content-3"
          aria-label="Close"
          onClick={() => setShowAlert(false)}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};
