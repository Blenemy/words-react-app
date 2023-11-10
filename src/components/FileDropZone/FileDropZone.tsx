import React, { memo, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { ReactComponent as DownLoad } from "../../assets/downloadImage.svg";
import { ReactComponent as Image } from "../../assets/Vector.svg";

/**
 * Компонент для загрузки файла с изображением.
 *
 * @param {Function} onFileUpload - Функция, вызываемая при успешной загрузке файла.
 * @param {React.Dispatch<React.SetStateAction<string | null>>} setPreviewImage - Функция для установки предварительного изображения.
 * @param {string | null} previewImage - Предварительное изображение.
 * @param {string} fileError - Сообщение об ошибке при загрузке файла.
 * @param {Function} handleDragError - Функция для обработки ошибок перетаскивания файла.
 * @returns {JSX.Element} - JSX элемент для загрузки файла.
 */

interface FileDropZoneProps {
  onFileUpload: (file: File) => void;
  setPreviewImage: React.Dispatch<React.SetStateAction<string | null>>;
  previewImage: string | null;
  fileError: string;
  handleDragError: (payload: string) => void;
}

export const FileDropZone: React.FC<FileDropZoneProps> = memo(
  ({
    onFileUpload,
    setPreviewImage,
    previewImage,
    fileError,
    handleDragError,
  }): JSX.Element => {
    const onDrop = useCallback(
      (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (!file) return handleDragError("File not accepted.");

        const objectURL = URL.createObjectURL(file);
        setPreviewImage(objectURL);
        onFileUpload(file);
        handleDragError("");
      },
      [onFileUpload, setPreviewImage, handleDragError]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept: {
        "image/jpeg": [".jpeg"],
        "image/jpg": [".jpg"],
        "image/png": [".png"],
        "image/webp": [".webp"],
        "image/svg": [".svg"],
      },
      multiple: false,
      maxSize: 30000000, // 30mb
    });

    return (
      <>
        <div
          {...getRootProps()}
          className={`w-full h-48 rounded-lg border border-dashed border-gray-400 flex items-center justify-center ${
            isDragActive ? "bg-f3f3f3" : "bg-e6e6e6"
          } hover:cursor-pointer`}
        >
          <input {...getInputProps()} />
          {previewImage ? (
            <img
              src={previewImage}
              alt="previewImage"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-black text-center flex flex-col justify-center items-center gap-4">
              <Image />
              <div>
                <div
                  className="flex items-center justify-center gap-2 text-[#1d7d74] text-center"
                  style={{ color: fileError ? "#F00631" : "" }}
                >
                  <span>Download your image</span> <DownLoad />
                </div>
                <p className="text-sm">Image format: JPG, PNG, SVG, WEBP</p>
                <p className="text-sm">Maximum size: 30 MB</p>
              </div>
            </div>
          )}
        </div>
        {fileError && <p className="text-red-500">{fileError}</p>}
      </>
    );
  }
);
