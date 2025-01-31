import React from 'react'
import { useState } from 'react';

import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

function BusinessOwnerDetails({ updateFormData, validationErrors }) {
    const [phone, setPhone] = useState("")
    const [citizenship, setCitizenship] = useState("")

    const handleChange = (event) => {
        const { name, value } = event.target;
        updateFormData(name, value);

        if (name === "citizenship") {
            setCitizenship(value)
        }

    };

    return (
        <div className='items-center justify-center p-12'>
            {/* { validationErrors ? <p className='error'>All Fields here are required **</p> : "" } */}
            {/* Business owner details  */}
            <section className='mx-auto w-full'>
                <h1 className='section-header'>Business Owner Details</h1>

                <form action="">
                    <div className='-mx-3 flex flex-wrap'>
                        <div className='w-full px-3 sm:w-1/2'>
                            <label
                                for="citizenship"
                                className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'
                            >Applicant Citizenship <span className='star'>*</span></label>
                            <select required value={citizenship} name="citizenship" id="citizenship" onChange={handleChange} placeholder='Select citizenship' className='input border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 py-3 px-6 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                <option value="">Select citizenship</option>
                                <option value="Rwandese">Rwandan</option>
                                <option value="Foreigner">Foreigner</option>
                            </select>
                            {validationErrors.citizenship && <p className="error">{validationErrors.citizenship}</p>}
                        </div>

                        {citizenship && citizenship === "Rwandese" && (

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
                                    className='input w-30 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base'
                                    min="119250000000000" // Minimum value of 9 numbers
                                    maxLength="16" // Maximum value of 9 numbers
                                    pattern="[0-9]{16}" // Pattern to enforce 9 digits/>
                                />
                            {validationErrors.nationalID && <p className="error">{validationErrors.nationalID}</p>}

                            </div>
                        )}

                        {citizenship && citizenship !== "Rwandese" && citizenship !== "" && (

                            <div className='-mx-3 flex flex-wrap'>
                                <div className='w-full px-3 sm:w-1/2'>
                                    <label
                                        for="passport"
                                        className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'
                                    >
                                        Passport number<span className='star'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="passportNumber"
                                        id="passport"
                                        onChange={handleChange}
                                        placeholder='Enter your passport number'
                                        className='input w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base'
                                        required
                                    />
                            {validationErrors.passportNumber && <p className="error">{validationErrors.passportNumber}</p>}

                                </div>

                            </div>

                        )}
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
                                className='input w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base'
                                required />
                            {validationErrors.otherNames && <p className="error">{validationErrors.otherNames}</p>}

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
                                className='input w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base'
                                required
                            />
                            {validationErrors.surname && <p className="error">{validationErrors.surname}</p>}

                        </div>
                    </div>

                    <div className='-mx-3 flex flex-wrap'>
                        <div className='w-full px-3 sm:w-1/2'>
                            <label
                                for="phoneNumber"
                                className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'
                            >
                                Phone number
                            </label>
                            <PhoneInput
                                country={"us"}
                                value={phone}
                                name="phoneNumber"
                                onChange={(phone) => setPhone(phone)}
                                enableSearch={true}
                                autoFormat={true}
                                className='country-phone-input' />
                                
                        </div>
                        <div className='w-full px-3 sm:w-1/2'>
                            <label
                                for="email"
                                className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'
                            >
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                onChange={handleChange}
                                placeholder='Enter an email address'
                                className='input w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base'
                                required
                            />

                        </div>
                    </div>
                </form>
            </section>

            {/* Business owner address  */}
            <section className='mx-auto w-full'>
                <h1 className='section-header'>Business Owner Address</h1>
                <div>
                    <label for="address"
                        className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'>Provinces <span className='star'>*</span></label>
                    <select required name="businessOwnerAddress" id="address" onChange={handleChange} className='input border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 py-3 px-6 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                        <option value="">Select province</option>
                        <option value="West">West</option>
                        <option value="East">East</option>
                        <option value="North">North</option>
                        <option value="South">South</option>
                        <option value="Kigali City">Kigali City</option>
                    </select>
                    {validationErrors.businessOwnerAddress && <p className="error">{validationErrors.businessOwnerAddress}</p>}

                </div>
            </section>
        </div>
    )
}

export default BusinessOwnerDetails
