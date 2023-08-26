import { useState } from "react";
import { AddCardType } from "../../../types/AddCardType";
import axios from "axios";
import { BASE_URL } from "../../../data/constants";

export const AddCard = () => {
  const [formData, setFormData] = useState<AddCardType>({
    'deck': 1,
    'word': '',
    'translation': '',
    'image': '',
	});

  const handleInputChange = (event: any) => {
		const { name, value } = event.target;
		setFormData(prevData => ({
				...prevData,
				[name]: value
		}));
	};

  const handleOnSubmit = async (event: any) => {
		event?.preventDefault()

		const dataToSend = {
			deck: 1,
			word: formData.word,
      translation: formData.translation,
      image: formData.image,
		}

		try {
			await axios.post(BASE_URL + '/study/cards/', dataToSend);

		} catch (error: any) {
			if (error.response) {
				console.log(error.response.data);
			}
		} finally {
      setFormData({
				deck: 1,
        word: '',
        translation: '',
        image: null,
		  });
    }
	}

  const handleChange = (event: any) => {
    const data = new FileReader();
    data.addEventListener('load', () => {
      setFormData(prevData => ({
				...prevData,
				image: data.result
		}));
    })
    data.readAsDataURL(event.target.files[0])
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <form action="" className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
          <input
            placeholder='Deck'
            required
            name={'deck'}
            type={'number'}
            className='text-black'
            value={formData.deck}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <input
            placeholder='Word in English'
            required
            name={'word'}
            type={'text'}
            className='text-black'
            value={formData.word}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <input
            placeholder='Translation'
            required
            name={'translation'}
            type={'text'}
            className='text-black'
            value={formData.translation}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <input
            type="file" 
            id="addCardInput" 
            onChange={handleChange}
          />
          <button type="submit">Add a card</button>
        </form>
      </div>
    </>
  )
}