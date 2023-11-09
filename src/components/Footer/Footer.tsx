import { useState } from "react";
import cardLingoWhite from "../../assets/cardLingoWhite.png";
import copyright from "../../assets/copyright.svg";
import { Logo } from "../Logo/Logo";
import { FooterLink } from "./FooterLink";
import InfoDialog from "../InfoDialog/InfoDialog";

/**
 * Компонент для отображения подвала страницы.
 *
 * @returns {JSX.Element} - JSX элемент для подвала.
 */
export const Footer = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <footer className="bg-primary">
      <div className="container mx-auto my-0">
        <div className="px-14 py-10">
          <div className="flex justify-between">
            <Logo image={cardLingoWhite} />
            <ul>
              <FooterLink text="About Us" route="https://github.com/Blenemy" />
              <li
                className="hover:text-wave duration-300 hover:cursor-pointer"
                onClick={() => setOpenModal(true)}
              >
                Review
              </li>
              <FooterLink text="FAQs" route="/" />
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
