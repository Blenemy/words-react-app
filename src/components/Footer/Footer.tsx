import { useState } from "react";
import cardLingoWhite from "../../assets/cardLingoWhite.png";
import copyright from "../../assets/copyright.svg";
import { Logo } from "../Logo/Logo";
import InfoDialog from "../InfoDialog/InfoDialog";

/**
 * Компонент для отображения подвала страницы.
 *
 * @returns {JSX.Element} - JSX элемент для подвала.
 */
export const Footer = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <footer className="bg-primary">
      <div className="container mx-auto my-0">
        <div className="px-14 py-10">
          <div className="flex justify-between">
            <Logo image={cardLingoWhite} />
            <ul>
              <li className="hover:text-wave duration-300">
                <a
                  href={"https://github.com/Blenemy"}
                  target="_blank"
                  rel="noreferrer"
                >
                  {"About Us"}
                </a>
              </li>
              <li
                className="hover:text-wave duration-300 hover:cursor-pointer"
                onClick={handleOpenModal}
              >
                Review
              </li>
            </ul>
            <div className="flex gap-3 self-end">
              <img src={copyright} alt="copyright" />
              <p>2023</p>
              <p>CardLingo.</p>
            </div>
          </div>
        </div>
      </div>

      {openModal && (
        <InfoDialog infoOpen={openModal} setInfoOpen={setOpenModal} />
      )}
    </footer>
  );
};
