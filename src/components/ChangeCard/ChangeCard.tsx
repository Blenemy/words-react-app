import { useState } from "react";
import { useAppSelector } from "../../app/hooks"
import { AddCardType } from "../../types/AddCardType";
import axios from "axios";
import { BASE_URL, ROUTE_FLIP_CARD } from "../../constants/constants";
import { useNavigate } from "react-router-dom";

export const ChangeCard: React.FC = () => {
  const { currentCard } = useAppSelector(state => state.currentCard);
  const [formData, setFormData] = useState<AddCardType>({
    'deck': currentCard?.deck,
    'word': currentCard?.word,
    'translation': currentCard?.translation,
    'image': currentCard?.image || null,
	});
  const navigate = useNavigate();

  const handleInputChange = (event: any) => {
		const { name, value } = event.target;
		setFormData(prevData => ({
				...prevData,
				[name]: value
		}));
	};

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

  const handleOnSubmit = async (event: any) => {
		event?.preventDefault()

		const dataToSend = {
			word: formData.word || currentCard?.word,
      translation: formData.translation || currentCard?.translation,
      image: formData.image || currentCard?.image,
		}

    console.log(dataToSend);

		try {
			const response = await axios.patch(BASE_URL + `/study/cards/${currentCard?.id}/`, dataToSend);

      console.log(response);

      if (response.status === 200) {
        navigate(ROUTE_FLIP_CARD)
      }

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
  
  return (
    <div>
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
          <button type="submit">Modify the card</button>
        </form>
    </div>
  )
}