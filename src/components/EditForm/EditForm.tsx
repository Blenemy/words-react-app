import { useState } from "react";
import { useAppSelector } from "../../app/hooks"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';
import { BASE_URL, ROUTE_PROFILE } from "../../constants/constants";

export const EditForm = () => {
  const { user } = useAppSelector(state => state.user);
  const token = Cookies.get('token');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    'first_name': '',
    'last_name': '',
    'email': '',
    'password': '',
});

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
        ...prevData,
        [name]: value
    }));
    
  };

  const handleCancelSaves = () => {
    navigate(ROUTE_PROFILE);
  }

  const handleOnSubmit = async (event: any) => {
		event?.preventDefault();

		const dataToSend: any = {
			first_name: formData.first_name || user?.first_name,
      last_name: formData.last_name || user?.last_name,
			email: formData.email || user?.email,
	  };

    if (formData.password) {
      dataToSend.password = formData.password;
    }

		try {
			const response = await axios.patch(BASE_URL + '/user/profile/', dataToSend, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (formData.password) {
        const newToken = response.data.token;

			  Cookies.set('token', newToken, { expires: 1 });
      }

			setFormData({
        'first_name': '',
        'last_name': '',
        'email': '',
        'password': '',
			});

      navigate(ROUTE_PROFILE);
		} catch (error) {
				console.error('Error:', error);
		}
	}

  return (
    <section>
      <div className="container">
        <div className="content px-16 py-12">
          <form action="" onSubmit={handleOnSubmit}>
            <div className="flex justify-between items-center">
              <h2 className="text-2xl">Edit profile</h2>
              <div>
                <img src={user?.avatar} alt="profileImage" className="rounded-[50%] object-cover h-[72px] w-[72px]"/>
              </div>
            </div>
            <div className="flex justify-between gap-[64px] mb-4">
              <div className="flex flex-col basis-1/2">
                <label className="font-['Inter var'] text-[20px] font-semibold text-stone-300" htmlFor="first_name">First Name</label>
                <input 
                  id="first_name" 
                  type="text" 
                  placeholder="First Name" 
                  className="px-6 py-5 text-[#858585] font-['Roboto'] text-xl" 
                  autoComplete="off"
                  value={formData.first_name} 
                  onChange={handleInputChange}
                  name='first_name'
                />
              </div>
              <div className="flex flex-col basis-1/2">
                <label className="font-['Roboto'] text-[20px] font-semibold text-stone-300" htmlFor="second-name">Second Name</label>
                <input 
                  id="second-name" 
                  type="text" 
                  placeholder="Second Name" 
                  className="px-6 py-5 text-[#858585] font-['Roboto'] text-xl" 
                  autoComplete="off"
                  value={formData.last_name} 
                  onChange={handleInputChange}
                  name='last_name'
                />
              </div>
            </div>
            <div className="flex mb-4">
              <div className="flex flex-col basis-full">
                <label className="font-['Roboto'] text-[20px] font-semibold text-stone-300" htmlFor="email">Email</label>
                <input 
                  id="email" 
                  type="email" 
                  placeholder="Email" 
                  className="px-6 py-5 text-[#858585] font-['Roboto'] text-xl" 
                  autoComplete="off"
                  value={formData.email} 
                  onChange={handleInputChange}
                  name='email'
                />
              </div>
            </div>
            <div className="flex mb-4">
              <div className="flex flex-col basis-full">
                <label className="font-['Roboto'] text-[20px] font-semibold text-stone-300" htmlFor="password">Password</label>
                <input 
                  id="password" 
                  type="password" 
                  placeholder="Password" 
                  className="px-6 py-5 text-[#858585] font-['Roboto'] text-xl" 
                  autoComplete="off"
                  value={formData.password} 
                  onChange={handleInputChange}
                  name='password'
                />
              </div>
            </div>
            <div className="flex gap-[40px]">
              <button 
                type="button" 
                className="w-[180px] h-14 flex items-center justify-center border-[#FF7008] text-white border-[1px] text-2xl font-['Roboto]"
                onClick={handleCancelSaves}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="w-[180px] h-14 flex items-center justify-center border-transparent text-white border-[1px] bg-[#FF7008] text-2xl font-['Roboto]"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
