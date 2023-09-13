import { Link } from 'react-router-dom';


export const HeaderLink = ({ route, title }: { route: string; title: string; }) => {
  return (
    <li>
      <Link
        className='flex items-center justify-center cursor-pointer rounded-2xl bg-secondary h-[35px] text-primary hover:bg-lilackButton hover:text-violetStroke duration-300 text-[20px] p-2'
        to={route}
      >
        {title}
      </Link>
    </li>
  );
};
