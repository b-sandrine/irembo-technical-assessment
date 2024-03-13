
import './App.css'

import BusinessOwnerDetails from './components/BusinessOwnerDetails';
import BusinessDetails from './components/BusinessDetails';
import ProductInformation from './components/ProductInformation';
import risaLogo from '../src/assets/risalogo.jpg'
import { useState } from 'react';
import axios from 'axios'
function App() {

  const [formData, setFormData] = useState({});

  const updateFormData = (key, value) => {
    setFormData(prevData => ({
      ...prevData,
      [key]: value
    }));
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    // Send formData to backend or perform other actions here
    try {
      console.log(formData);

      const response = await axios.post("http://localhost:5000/api/v1/registerDetails", formData, {
        auth: {
          username: 'sanrdushimimana@gmail.com',
          password: 'ybml soro dqjj tdgk'
        }
      });
      console.log("Email Sent", response.data)
      alert(response.data.message)
    }
    catch(error) {
      console.error("Error sending email", error);
    }
  };

  return (
    <>
      {/* <img src={risaLogo} alt="" className='w-1/5 mx-auto mt-8 mb-8' /> */}
      <section>
        <div className='w-4/5 mx-auto mb-10 border-2 border-blue-700 rounded'>
          <div className="heading bg-blue-200 w-full p-4 border-b-2 border-blue-300">
            <h2 className="text-xl text-blue-500  pb-2">Business Owner Details</h2>
          </div>
          <BusinessOwnerDetails updateFormData={updateFormData}/>
        </div>

        <div className='w-4/5 mx-auto mb-10 border-2 border-blue-700 rounded'>
          <div className="heading bg-blue-200 w-full p-4 border-b-2 border-blue-300">
            <h2 className="text-xl text-blue-500  pb-2">Business Details</h2>
          </div>
          <BusinessDetails updateFormData={updateFormData}/>
        </div>

        <div className='w-4/5 mx-auto mb-10 border-2 border-blue-700 rounded'>
          <div className="heading bg-blue-200 w-full p-4 border-b-2 border-blue-300">
            <h2 className="text-xl text-blue-500  pb-2">Product Information</h2>
          </div>
          <ProductInformation updateFormData={updateFormData}/>
        </div>
      </section>

      <button 
        type="submit" 
        onClick={handleSubmit}
        className="text-white ml-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </>
  )
}

export default App
