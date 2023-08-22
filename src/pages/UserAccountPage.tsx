import { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setUser } from '../features/userSlice';
import axios from "axios";
import { ROUTE_AUTHORIZATION, ROUTE_EDIT_PROFILE } from '../constants/constants';
import userDefault from '../images/user-acc.svg'
import pencil from '../images/icons8-pencil-50.png'
import { Loader } from '../components/Loader/Loader';

export const UserAccountPage = () => {
  const token = Cookies.get('token');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector(state => state.user);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function getUser() {
      if (!token) {
        navigate(ROUTE_AUTHORIZATION);
        return;
      }

      try {
        const response = await axios.get('http://159.65.119.170:8000/user/profile/', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      dispatch(setUser(response.data));
      } catch (error) {
        console.log(`Error:${error}`);
      }
    }

    getUser();
    
  }, [dispatch, token, navigate])

  const handleLogOut = () => {
    Cookies.remove('token');
    dispatch(setUser(null));
    navigate(ROUTE_AUTHORIZATION);
  }

  async function sendDataToServer(base64: string | ArrayBuffer | null) {
    try {
      setLoading(true);

        const dataToSend = {
          avatar_base64: base64,
        };

        const response = await axios.patch('http://159.65.119.170:8000/user/profile/', dataToSend, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.status === 200) {
            dispatch(setUser(response.data));
        } else {
            console.error('Ошибка при обновлении аватара');
        } 

    } catch (error) {
        console.error(`Error during sending avatar: ${error}`);
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (event: any) => {
    const data = new FileReader();
    data.addEventListener('load', () => {
      sendDataToServer(data.result);
    })
    data.readAsDataURL(event.target.files[0])
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <section className="user-page">
      {user && (
        <div className="user-page__content flex flex-col items-center px-7 py-4">
        <div className='flex flex-col'>
            <div className="user-page__header flex items-center mb-8 gap-6">
              <div className="user-page__image relative">
                <img 
                  src={user.avatar || userDefault} 
                  alt="ProfilePhoto" 
                  className="user-page__img rounded-[50%] object-cover h-[72px] w-[72px]"
                />
                <label htmlFor="avatarInput">
                  <img src={pencil} alt="" className='absolute bottom-0 right-0 w-[15px] h-[15px] cursor-pointer'/>
                </label>
                <input 
                  type="file" 
                  id="avatarInput" 
                  onChange={handleChange}
                  className='hidden'
                />
              </div>
              <div className="user-page__details flex flex-col gap-2">
                <div className="user-page__name text-[#FDFDFD] text-2xl font-semibold">{`${user.first_name} ${user.last_name}`}</div>
                <div className="user-page__status border-solid border-amber-400 border rounded-[8px] w-[fit-content] text-[10px] px-2 py-[3px]">FREE</div>
              </div>
          </div>
          <div className="user-page__credentials credentials w-[550px] bg-[#21212B] rounded-[10px] mb-7">
            <div className="credentials__content px-7 py-6">
              <div className="credentials__block mb-6 flex justify-between items-center">
                <div className="credentials__left">
                  <div className="credentials__text text-[#818187]">Display Name</div>
                  <div className="credentials__description text-[#FDFDFD]">{user.username}</div>
                </div>
                <div className="credentials__right">
                </div>
              </div>
              <div className="credentials__block mb-6 flex justify-between items-center"> 
                <div className="credentials__left">
                  <div className="credentials__text text-[#818187]">Email</div>
                  <div className="credentials__description text-[#FDFDFD]">{user.email}</div>
                </div>
              </div>
              <div className="credentials__block flex justify-between items-center">
                <div className="credentials__left">
                  <div className="credentials__text text-[#818187]">Password</div>
                  <div className="credentials__description text-[#FDFDFD]">●●●●●●●●●</div>
                </div>
                <div className="credentials__right">
                  <Link 
                    className="credentials__button bg-[#414052] px-4 py-1 rounded-[8px]"
                    to={ROUTE_EDIT_PROFILE}
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <button 
            type='button' 
            className='bg-[#21212B] rounded-[10px] px-5 py-2 w-[fit-content] self-center'
            onClick={handleLogOut}
          >
            Sign out
          </button>
        </div>
      </div>
      )}
    </section>
  )
}