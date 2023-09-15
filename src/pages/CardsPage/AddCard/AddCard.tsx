import { handleInputChange } from "../../../utils/helpers";
import { useAddCart } from "../../../hooks/useAddCard";

export const AddCard = () => {
  const {
    formData,
    setFormData,
    handleAddCardOnSubmit,
    handleFileChange,
    error,
  } = useAddCart();

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <form
          action=""
          className="flex flex-col gap-4"
          onSubmit={handleAddCardOnSubmit}
        >
          <input
            placeholder="Deck"
            disabled
            name={"deck"}
            type={"number"}
            className="text-black"
            value={formData.deck}
            onChange={(event) => handleInputChange(event, setFormData)}
            autoComplete="off"
          />
          <input
            placeholder="Word in English"
            required
            name={"word"}
            type={"text"}
            className="text-black"
            value={formData.word}
            onChange={(event) => handleInputChange(event, setFormData)}
            autoComplete="off"
          />
          <input
            placeholder="Translation"
            required
            name={"translation"}
            type={"text"}
            className="text-black"
            value={formData.translation}
            onChange={(event) => handleInputChange(event, setFormData)}
            autoComplete="off"
          />
          <input
            placeholder="Description"
            required
            name={"description"}
            type={"text"}
            className="text-black"
            value={formData.description}
            onChange={(event) => handleInputChange(event, setFormData)}
            autoComplete="off"
          />
          <input type="file" id="addCardInput" onChange={handleFileChange} />
          <button type="submit">Add a card</button>
          {error && <div className="text-[14px] text-red-500">{error}</div>}
        </form>
      </div>
    </>
  );
};
