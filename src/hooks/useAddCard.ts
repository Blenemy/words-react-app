import { AddCardType } from "../types/AddCardType";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { BASE_URL } from "../data/constants";
import { useLocation } from "react-router-dom";

export const useAddCart = () => {
  const location = useLocation();
  const deckId = location.state.deckId;
  const token = Cookies.get('token');
  const [error, setError] = useState<null | string>(null);
  const [formData, setFormData] = useState<AddCardType>({
    deck: deckId,
    word: '',
    translation: '',
    description: '',
    image: '',
	});

  const handleAddCardOnSubmit = async (event: any) => {
		event?.preventDefault()

		const dataToSend = {
			deck: deckId,
			word: formData.word,
      translation: formData.translation,
      description: formData.description,
      image: formData.image,
		}

		try {
			await axios.post(BASE_URL + '/study/cards/', dataToSend, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      setError(null)

		} catch (error: any) {
			if (error.response) {
				console.log(error.response.data);
        setError(error.response.data.error)
			}
		} finally {
      setFormData({
				deck: deckId,
        word: '',
        translation: '',
        description: '',
        image: null,
		  });
    }
	}

  const handleFileChange = (event: any) => {
    const data = new FileReader();
    data.addEventListener('load', () => {
      setFormData(prevData => ({
				...prevData,
				image: data.result
		}));
    })
    data.readAsDataURL(event.target.files[0])
  }

  return { formData, setFormData, handleAddCardOnSubmit, handleFileChange, error }
}