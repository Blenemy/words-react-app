import { Logo } from "../../components/CustomLogo/Logo";
import cardLingoWhite from "../../assets/cardLingoWhite.png";
import copyright from "../../assets/copyright.svg";

export const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="container mx-auto my-0">
        <div className="px-14 py-10">
          <div className="flex justify-between">
            <Logo image={cardLingoWhite} />
            <ul>
              <FooterLink text="About Us" route="/" />
              <FooterLink text="Review" route="/" />
              <FooterLink text="FAQs" route="/" />
            </ul>
            <div className="flex gap-3 self-end">
              <img src={copyright} alt="" />
              <p>2023</p>
              <p>CardLingo.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ text, route }: { text: string; route: string }) => {
  return (
    <li className="hover:text-wave duration-300">
      <a href={route}>{text}</a>
    </li>
  );
};
