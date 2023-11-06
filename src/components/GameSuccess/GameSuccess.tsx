import { Link } from "react-router-dom";
import { ROUTE_CARD_GAME } from "../../data/constants";

/**
 * GameSuccess компонент, который отображает сообщение об успешном завершении игры.
 *
 * Компонент включает в себя иконку с галочкой, заголовок с поздравлением и кнопку для возврата к игре.
 *
 * @returns {JSX.Element} Возвращает JSX элемент, который рендерит сообщение об успехе в игре.
 */

export const GameSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-green-100 p-8 rounded-lg shadow-lg w-96">
        <div className="flex items-center justify-center mb-4">
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
        <h2 className="text-2xl font-bold text-center mb-4">Good Job!</h2>
        <p className="text-center mb-6">You've completed this deck already</p>
        <Link
          to={ROUTE_CARD_GAME}
          className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
        >
          Return to the game page
        </Link>
      </div>
    </div>
  );
};
