import React from 'react'
import { useState } from 'react';

function BusinessOwnerDetails({ updateFormData }) {
    const [validationErrors, setValidationErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        updateFormData(name, value);

        // Validate the input value
        if (!value.trim()) {
            setValidationErrors(prevErrors => ({
                ...prevErrors,
                [name]: 'This field is required'
            }));
        } else {
            setValidationErrors(prevErrors => ({
                ...prevErrors,
                [name]: ''
            }));
        }
    };

    return (
        <div className='items-center justify-center p-12'>
            {/* { validationErrors ? <p className='error'>All Fields here are required **</p> : "" } */}
            {/* Business owner details  */}
            <section className='mx-auto w-full'>
                <h1 className='mt-5 mb-5 text-3xl font-semibold leading-tight tracking-normal text-inherit antialiased'>Business Owner Details</h1>
                <form action="">
                    <div>
                        <label
                            for="citizenship"
                            className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'
                        >Applicant Citizenship <span className='star'>*</span></label>
                        <select required name="citizenship" id="citizenship" onChange={handleChange} className='border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 py-3 px-6 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                            <option value="1">Select citizenship</option>
                            <option value="Rwandese">Rwandese</option>
                            <option value="Foreigner">Foreigner</option>
                        </select>
                        {validationErrors.citizenship && <p className="error">{validationErrors.citizenship}</p>}
                    </div>
                    <div className='-mx-3 flex flex-wrap'>
                        <div className='w-full px-3 sm:w-1/2'>
                            <label
                                for="ID"
                                className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'
                            >
                                Identification document number<span className='star'>*</span>
                            </label>
                            <input
                                type="number"
                                name="nationalID"
                                id="ID"
                                placeholder="Enter your national ID"
                                onChange={handleChange}
                                required
                                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base' 
                                min="119250000000000" // Minimum value of 9 numbers
                                maxLength="16" // Maximum value of 9 numbers
                                pattern="[0-9]{16}" // Pattern to enforce 9 digits/>
                                />
                        </div>
                        <div className='w-full px-3 sm:w-1/2'>
                            <label
                                for="passport"
                                className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'
                            >
                                Passport number<span className='star'>*</span>
                            </label>
                            <input
                                type="number"
                                name="passportNumber"
                                id="passport"
                                onChange={handleChange}
                                placeholder='Enter your passport number'
                                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base'
                                required
                            />

                        </div>
                    </div>
                    <div className='-mx-3 flex flex-wrap'>
                        <div className='w-full px-3 sm:w-1/2'>
                            <label
                                for="otherNames"
                                className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'
                            >
                                Other names<span className='star'>*</span>
                            </label>
                            <input
                                type="text"
                                name="otherNames"
                                id="otherNames"
                                placeholder="Enter your other names"
                                onChange={handleChange}
                                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base'
                                required />
                        </div>
                        <div className='w-full px-3 sm:w-1/2'>
                            <label
                                for="surname"
                                className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'
                            >
                                Surname<span className='star'>*</span>
                            </label>
                            <input
                                type="text"
                                name="surname"
                                id="surname"
                                onChange={handleChange}
                                placeholder='Enter your surname'
                                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base'
                                required
                            />

                        </div>
                    </div>
                    <div className='-mx-3 flex flex-wrap'>
                        <div className='w-full px-3 sm:w-1/2'>
                            <label
                                for="phoneNumber"
                                className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'
                            >
                                Phone number<span className='star'>*</span>
                            </label>
                            <div className="flex-container">
                                <select name="countryCode" className='country-code-select' required onChange={handleChange}>
                                    <option value="+1">+1 (USA)</option>
                                    <option value="+44">+44 (UK)</option>
                                    <option value="+91">+91 (India)</option>
                                    <option value="+250">+250 (Rwanda)</option>
                                    {/* Add more country codes as needed */}
                                </select>
                                <input
                                    type="number"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    placeholder="781331567"
                                    onChange={handleChange}
                                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base'
                                    required />

                            </div>
                        </div>
                        <div className='w-full px-3 sm:w-1/2'>
                            <label
                                for="email"
                                className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'
                            >
                                Email address<span className='star'>*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                onChange={handleChange}
                                placeholder='Enter an email address'
                                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base'
                                required
                            />

                        </div>
                    </div>
                </form>
            </section>

            {/* Business owner address  */}
            <section className='mx-auto w-full'>
                <h1 className='mt-5 mb-5 text-3xl font-semibold leading-tight tracking-normal text-inherit antialiased'>Business Owner Address</h1>
                <div>
                    <label for="address"
                        className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'>Provinces <span className='star'>*</span></label>
                    <select required name="businessOwnerAddress" id="address" onChange={handleChange} className='border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 py-3 px-6 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                        <option value="1">Select province</option>
                        <option value="West">West</option>
                        <option value="East">East</option>
                        <option value="North">North</option>
                        <option value="South">South</option>
                        <option value="Kigali City">Kigali City</option>
                    </select>
                </div>
            </section>
        </div>
    )
}

export default BusinessOwnerDetails
