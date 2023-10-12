import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface FileDropZoneProps {
  onFileUpload?: (file: File) => void;
  setPreviewImage: React.Dispatch<React.SetStateAction<string | null>>;
  previewImage: string | null;
}

const FileDropZone: React.FC<FileDropZoneProps> = ({
  onFileUpload,
  setPreviewImage,
  previewImage,
}) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      const objectURL = URL.createObjectURL(file);
      setPreviewImage(objectURL);

      if (onFileUpload) {
        onFileUpload(file);
      }
    },
    [onFileUpload, setPreviewImage]
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
    maxSize: 2000000,
  });

  return (
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
        <div className="text-black" style={{ textAlign: "center" }}>
          <div style={{ fontSize: "24px", marginBottom: "10px" }}>+</div>
          <div>Перетащите изображение сюда</div>
        </div>
      )}
    </div>
  );
};

export default FileDropZone;
