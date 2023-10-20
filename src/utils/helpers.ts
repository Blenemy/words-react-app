export const handleInputChange = (event: any, setAction: React.Dispatch<React.SetStateAction<any>>) => {
  const { name, value } = event.target;
  setAction((prevData: any) => ({
      ...prevData,
      [name]: value
  }));
};