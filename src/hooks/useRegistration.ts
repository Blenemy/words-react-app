import { useState } from 'react';
import axios from 'axios';
import { BASE_URL, ROUTE_HOME } from '../data/constants';
import { useNavigate } from 'react-router-dom';
import { UserData } from '../types/UserData';
import { useMutation } from '@tanstack/react-query';

export const useRegistration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<UserData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [localError, setLocalError] = useState<string | null>(null);

  const registerUser = (data: UserData) => axios.post(BASE_URL + '/user/register/', data);

  const mutation = useMutation(registerUser, {
    onSuccess: (response) => {
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      navigate(ROUTE_HOME);
    },
    onError: (error: any) => {
      console.error('Error:', error);
    }
  });

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setLocalError("Passwords don't match");
      return;
    }

    const dataToSend = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
    };

    mutation.mutate(dataToSend);
  };

  const error = mutation.isError 
    ? (mutation.error as { message: string }).message 
    : localError;

  return { handleOnSubmit, formData, setFormData, error };
};
