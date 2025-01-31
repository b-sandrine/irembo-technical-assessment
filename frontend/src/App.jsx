
import './App.css'

import BusinessOwnerDetails from './components/BusinessOwnerDetails';
import BusinessDetails from './components/BusinessDetails';
import ProductInformation from './components/ProductInformation';
import risaLogo from '../src/assets/risalogo.jpg'
// Importing react icons 
import { GrDocumentText } from "react-icons/gr";

import { useState } from 'react';
import axios from 'axios'
function App() {

  const [formData, setFormData] = useState({});
  const [validationErrors, setValidationErrors] = useState({
    citizenship: "",
    nationalID: "",
    passportNumber: "",
    otherNames: "",
    surname: "",
    businessOwnerAddress: "",
    businessType: "",
    companyName: "",
    tinNumber: "",
    registrationDate: "",
    businessAddress: "",
    purposeOfImportation: "",
    other_reason: "",
    productCategory: "",
    productName: "",
    descriptionOfProducts: "",
    unitOfMeasurement: "",
    quantityOfProducts: "",
  })

  const updateFormData = (key, value) => {
    setFormData(prevData => ({
      ...prevData,
      [key]: value
    }));
  };

  const validateForm = () => {
    const errors = {}
    if (!formData.citizenship) errors.citizenship = "Citizenship is required";
    if (!formData.companyName) errors.companyName = "Company name is required";

    if (!formData.nationalID) {
      errors.nationalID = "National ID is required";
    } else if (!/^\d{16}$/.test(formData.nationalID)) {
      errors.nationalID = "National ID must be exactly 16 digits";
    }

    if (!formData.passportNumber) errors.passportNumber = "Passport number is required";
    if (!formData.otherNames) errors.otherNames = "Other names field is required";
    if (!formData.surname) errors.surname = "Surname is required";


    if (!formData.businessOwnerAddress) errors.businessOwnerAddress = "This field is required";
    if (!formData.businessType) errors.businessType = "This field is required";
    if (!formData.companyName) errors.companyName = "This field is required";
    if (!formData.tinNumber) errors.tinNumber = "This field is required";

    if (!formData.registrationDate) errors.registrationDate = "This field is required";
    if (!formData.businessAddress) errors.businessAddress = "This field is required";
    if (!formData.purposeOfImportation) errors.purposeOfImportation = "This field is required";
    if (!formData.productCategory) errors.productCategory = "This field is required";
    if (!formData.productName) errors.productName = "This field is required";
    if (!formData.descriptionOfProducts) errors.descriptionOfProducts = "This field is required";
    if (!formData.unitOfMeasurement) errors.unitOfMeasurement = "This field is required";

    if(!formData.quantityOfProducts) {
      errors.quantityOfProducts="This field is required"
    }


    setValidationErrors(errors);

    return Object.keys(errors).length; // Return true if no errors

  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formData); // Consoling the form data

    // Validate the form
    if (validateForm()) {
      // Send formData to backend or perform other actions here

      try {
        console.log(formData);

        const response = await axios.post("http://localhost:3000/api/v1/registerDetails", formData, {
          auth: {
            username: 'sanrdushimimana@gmail.com',
            password: 'ybml soro dqjj tdgk'
          }
        });
        console.log("Email Sent", response.data)
        alert(response.data.message)
      }
      catch (error) {
        console.error("Error sending email", error);
      }
    }
    else {
      alert("All fields marked * must be filled")
    }



  };

  return (
    <>
      {/* <img src={risaLogo} alt="" className='w-1/5 mx-auto mt-8 mb-8' /> */}
      <section>
        <div className='w-4/5 mx-auto mb-10'>
          <h1>RICA Import permit</h1>
        </div>
        <div className='w-4/5 mx-auto mb-10 border-2 border-blue-700 rounded'>

          <div className="heading bg-blue-200 w-full p-4 border-b-2 border-blue-300">
            <div className="main-header-flex">
              <GrDocumentText className='icon' />
              <h2 className="text-xl text-blue-500  pb-2">Business Owner Details</h2>
            </div>
          </div>
          <BusinessOwnerDetails updateFormData={updateFormData} validationErrors={validationErrors} />
        </div>

        <div className='w-4/5 mx-auto mb-10 border-2 border-blue-700 rounded'>
          <div className="heading bg-blue-200 w-full p-4 border-b-2 border-blue-300">
            <div className="main-header-flex">
              <GrDocumentText className='icon' />
              <h2 className="text-xl text-blue-500  pb-2">Business Details</h2>
            </div>
          </div>
          <BusinessDetails updateFormData={updateFormData} validationErrors={validationErrors} />
        </div>

        <div className='w-4/5 mx-auto mb-10 border-2 border-blue-700 rounded'>
          <div className="heading bg-blue-200 w-full p-4 border-b-2 border-blue-300">
            <div className="main-header-flex">
              <GrDocumentText className='icon' />
              <h2 className="text-xl text-blue-500  pb-2">Product Information</h2>
            </div>
          </div>
          <ProductInformation updateFormData={updateFormData} validationErrors={validationErrors} />
        </div>
      </section>

      <button
        type="submit"
        onClick={handleSubmit}
        className="handle-submit">Submit</button>
    </>
  )
}

export default App
