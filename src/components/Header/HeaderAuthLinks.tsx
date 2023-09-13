import { Link } from 'react-router-dom';
import { ROUTE_AUTHORIZATION, ROUTE_REGISTRATION } from '../../data/constants';


export const HeaderAuthLinks = () => {
  return (
    <>
      <Link className='flex relative items-center justify-center w-[175px] text-[16px] h-[38px] bg-[#181818] text-white mr-[-30px] rounded-3xl cursor-pointer hover:text-primary z-10 hover:bg-white duration-300' to={ROUTE_REGISTRATION}>Sign up</Link>
      <Link className='flex relative  items-center justify-center w-[175px] text-[16px] h-[38px] bg-white text-[#181818] rounded-3xl cursor-pointer hover:bg-primary hover:text-white duration-300' to={ROUTE_AUTHORIZATION}>Log in</Link>
    </>
  );
};
