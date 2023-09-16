import { Link } from "react-router-dom";
import arrowDecorator from "../../images/gamePageVector.svg";

type BreadCrumbsProps = {
  text: string;
  route: string;
};

export const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ text, route }) => {
  return (
    <Link className="text-primary inline-flex gap-4 items-center" to={route}>
      <img src={arrowDecorator} alt="arrowBack" />
      <span data-testid={"BreadCrumbsSpan"}>{text}</span>
    </Link>
  );
};
