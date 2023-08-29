import { useState } from 'react';
import axios from 'axios';
import { BASE_URL, ROUTE_HOME } from '../data/constants';
import { useNavigate } from 'react-router-dom';
import { UserData } from '../types/UserData';

export const useRegistration = () => {
  const [formData, setFormData] = useState<UserData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
	});
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null)

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event?.preventDefault();

		if (formData.password !== formData.confirmPassword) {
      setError('The passwords does not match')
			return;
		}

		const dataToSend = {
			username: formData.username,
			password: formData.password,
			email: formData.email,
	};

		try {
			const response = await axios.post(BASE_URL + '/user/register/', dataToSend);
			setFormData({
					username: '',
					email: '',
					password: '',
					confirmPassword: ''
			});
      setError(null)
			navigate(ROUTE_HOME)
      console.log(response);
			
		} catch (error: any) {
				console.error('Error:', error);
        setError(`Error: ${error.response.data.username}`)
		}
	}

  return { handleOnSubmit, formData, setFormData, error };
}

