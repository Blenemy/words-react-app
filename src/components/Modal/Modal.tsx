import { CardFromServer } from "../../types/CardFromServer";
import { CustomInput } from "../CustomInput/CustomInput";
import { handleInputChange } from "../../utils/helpers";
import { useChangeCard } from "../../hooks/useChangeCard";
import { useState } from "react";
import { FileDropZone } from "../FileDropZone/FileDropZone";

/**
 * Модальное окно для редактирования карточки.
 *
 * @param {object} props - Свойства компонента Modal.
 * @param {boolean} props.showModal - Отображение/скрытие модального окна.
 * @param {(payload: boolean) => void} props.handleShowModal - Функция для управления отображением модального окна.
 * @param {CardFromServer} props.card - Исходная карточка для редактирования.
 * @returns {JSX.Element | null} - JSX элемент модального окна.
 */

type ModalProps = {
  showModal?: boolean;
  handleShowModal: (payload: boolean) => void;
  card: CardFromServer;
};

export const Modal: React.FC<ModalProps> = ({
  showModal,
  handleShowModal,
  card,
}): JSX.Element | null => {
  const [previewImage, setPreviewImage] = useState<string | null>(card.image);

  const { formData, setFormData, handleOnSubmit } = useChangeCard(card, () =>
    handleShowModal(false)
  );
  const [fileError, setFileError] = useState<string>("");

  const handleDragError = (payload: string) => {
    setFileError(payload);
  };

  return (
    <>
      {showModal ? (
        <>
          <form
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black"
            onSubmit={handleOnSubmit}
          >
            <div className="relative min-w-[700px] my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex gap-10 items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <CustomInput
                    classname="text-3xl font-semibold flex border-none"
                    placeholder={card.word}
                    name={"word"}
                    type="text"
                    value={formData.word || ""}
                    onChangeHandler={(event: Event) =>
                      handleInputChange(event, setFormData)
                    }
                    autoComplete="off"
                  />
                  <CustomInput
                    classname="text-3xl font-semibold flex border-none"
                    placeholder={card.translation}
                    name={"translation"}
                    type="text"
                    value={formData.translation || ""}
                    onChangeHandler={(event: Event) =>
                      handleInputChange(event, setFormData)
                    }
                    autoComplete="off"
                  />
                  <button
                    className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => handleShowModal(false)}
                  >
                    <span
                      className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none"
                      onClick={() => handleShowModal(false)}
                    >
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <CustomInput
                    classname="my-4 text-blueGray-500 text-lg leading-relaxed border-none w-full"
                    placeholder={card.description || "Description"}
                    name={"description"}
                    type="text"
                    value={formData.description || ""}
                    onChangeHandler={(event: Event) =>
                      handleInputChange(event, setFormData)
                    }
                    autoComplete="off"
                  />
                  <FileDropZone
                    onFileUpload={(file) => {
                      const reader = new FileReader();
                      reader.addEventListener("load", () => {
                        setFormData((prevData: any) => ({
                          ...prevData,
                          image: reader.result as string,
                        }));
                      });
                      reader.readAsDataURL(file);
                    }}
                    setPreviewImage={setPreviewImage}
                    previewImage={previewImage}
                    handleDragError={handleDragError}
                    fileError={fileError}
                  />
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
