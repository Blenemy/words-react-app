import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { BASE_URL, ROUTE_AUTHORIZATION, ROUTE_HOME } from '../data/constants';
import { setUser } from '../features/userSlice';
import { useAppDispatch } from '../app/hooks';
import { useLocation, useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const loginUser = async (username: string, password: string) => {
    const response = await axios.post(BASE_URL + '/user/login/', { username, password });
    return response.data;
  }

  const getUserProfile = async (token: string) => {
    const response = await axios.get(BASE_URL + '/user/profile/', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  }

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    
    const { username, password } = formData;

    try {
      const { token } = await loginUser(username, password);

      if (token) {
        Cookies.set('token', token, { expires: 1 });
        const userData = await getUserProfile(token);
        dispatch(setUser(userData));
      } else {
        navigate(ROUTE_AUTHORIZATION, { state: { from: location.pathname } });
      }

      setFormData({
        username: '',
        password: '',
      });
      setError(null)

      const { from } = location.state || { from: { pathname: ROUTE_HOME } };
      navigate(from);

    } catch (error: any) {
      if (error.response) {
        setError(error.response.data.error)
        console.log(error.response.data);
      }
    }
  }

  return { handleOnSubmit, formData, setFormData, error };
}

