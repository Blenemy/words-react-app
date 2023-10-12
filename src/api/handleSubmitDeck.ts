import { NavigateFunction } from "react-router-dom";
import { BASE_URL, ROUTE_FLIP_CARD } from "../data/constants";
import axios from "axios";

export const handleSumbitDeck = async (
  deck: number,
  token: string | undefined,
  navigate: NavigateFunction
) => {
  try {
    const response = await axios.post(
      BASE_URL + `/study/add_deck/${deck}/`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 201) {
      navigate(ROUTE_FLIP_CARD, { state: { deckId: deck, isDefault: true } });
    }
  } catch (error) {
    console.log(error);
  }
};
