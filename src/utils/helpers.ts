export const handleInputChange = (
  event: any,
  setAction: React.Dispatch<React.SetStateAction<any>>
) => {
  const { name, value } = event.target;
  setAction((prevData: any) => ({
    ...prevData,
    [name]: value,
  }));
};

export const handleFileUpload = (
  file: File,
  setAction: React.Dispatch<React.SetStateAction<any>>
) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    setAction((prevData: any) => ({
      ...prevData,
      image: reader.result as string,
    }));
  });
  reader.readAsDataURL(file);
};
