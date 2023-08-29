import { useEffect, useState } from "react";
import { AddCardType } from "../../../types/AddCardType";
import axios from "axios";
import { BASE_URL, ROUTE_FLIP_CARD } from "../../../data/constants";
import { useNavigate, useParams} from "react-router-dom";
import { CardFromServer } from "../../../types/CardFromServer";
import { Loader } from "../../../components/Loader/Loader";
import { handleInputChange } from "../../../utils/helpers";
import Cookies from "js-cookie";

export const ChangeCard: React.FC = () => {
  const [currentCard, setCurrentCard] = useState<null | CardFromServer>(null)
  const navigate = useNavigate();
  const { cardId } = useParams();
  const [isLoading, setLoading] = useState<boolean>(true);
  const token = Cookies.get('token');
  const [formData, setFormData] = useState<AddCardType>({
    deck: 1,
    word: '',
    translation: '',
    image: null,
	});

  const getCurrentCard = async () => {
    setLoading(true);
    try {
      const response = await axios.get(BASE_URL + `/study/cards/${cardId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      setCurrentCard(response.data);
      setLoading(false);
      
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  useEffect(() => {
    if (!currentCard) {
      getCurrentCard();
    } 
  }, [cardId]);
  
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

  const handleOnSubmit = async (event: any) => {
		event?.preventDefault()

		const dataToSend: any = {
			word: formData.word || currentCard?.word,
      translation: formData.translation || currentCard?.translation,
		}

    if (formData.image !== null) {
      dataToSend.image = formData.image;
    }

		try {
			const response = await axios.patch(BASE_URL + `/study/cards/${currentCard?.id}/`, dataToSend);

      if (response.status === 200) {
        setCurrentCard(null)
        setFormData({
          deck: 1,
          word: '',
          translation: '',
          image: null,
        });
        navigate(ROUTE_FLIP_CARD)
      }

		} catch (error: any) {
			if (error.response) {
				console.log(error.response.data);
			}
		}
	}
  
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
        <h2>{currentCard?.word}</h2>
        <form action="" className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
          <input
            placeholder='Deck'
            required
            name={'deck'}
            type={'number'}
            className='text-black'
            value={formData.deck}
            onChange={(event) => handleInputChange(event, setFormData)}
            autoComplete="off"
          />
          <input
            placeholder='Word in English'
            required
            name={'word'}
            type={'text'}
            className='text-black'
            value={formData.word}
            onChange={(event) => handleInputChange(event, setFormData)}
            autoComplete="off"
          />
          <input
            placeholder='Translation'
            required
            name={'translation'}
            type={'text'}
            className='text-black'
            value={formData.translation}
            onChange={(event) => handleInputChange(event, setFormData)}
            autoComplete="off"
          />
          <input
            type="file" 
            id="addCardInput" 
            onChange={handleFileChange}
          />
          <button type="submit">Modify the card</button>
        </form>
      </>
    )}
    </div>
  )
}