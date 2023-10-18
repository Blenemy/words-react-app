import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { ReactComponent as DownLoad } from "../../assets/downloadImage.svg";
import { ReactComponent as Image } from "../../assets/Vector.svg";

interface FileDropZoneProps {
  onFileUpload?: (file: File) => void;
  setPreviewImage: React.Dispatch<React.SetStateAction<string | null>>;
  previewImage: string | null;
  fileError?: string;
  handleDragError: (payload: string) => void;
}

const FileDropZone: React.FC<FileDropZoneProps> = ({
  onFileUpload,
  setPreviewImage,
  previewImage,
  fileError,
  handleDragError,
}) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      try {
        const file = acceptedFiles[0];
        const objectURL = URL.createObjectURL(file);
        setPreviewImage(objectURL);

        if (onFileUpload) {
          onFileUpload(file);
          handleDragError("");
        }
      } catch (error) {
        handleDragError(
          "Overload resolution failed. The maximum size of an image is 30mb"
        );
      }
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
                <span>Завантажити зображення</span> <DownLoad />
              </div>
              <p className="text-sm">Формат зображення: JPG, PNG, SVG, WEBP</p>
              <p className="text-sm">Максимальний розмір: 30 МБ</p>
            </div>
          </div>
        )}
      </div>
      {fileError && <p className="text-red-500">{fileError}</p>}
    </>
  );
};

export default FileDropZone;