import React from 'react'

function BusinessDetails({ updateFormData }) {

    const handleChange = (event) => {
        const { name, value } = event.target;
        updateFormData(name, value);
    };

    return (
        <div className='items-center justify-center p-12'>
            {/* Business Details  */}
            <section className='mx-auto w-full max-w-[550px]'>
                <h1 className='mt-5 mb-5 text-3xl font-semibold leading-tight tracking-normal text-inherit antialiased'>Business Details</h1>
                <form action="">
                    <div className='-mx-3 flex flex-wrap'>
                        <div className='w-full px-3 sm:w-1/2'>
                            <label for="businessType"
                                className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'
                            >Business type <span className='star'>*</span></label>
                            <select required name="businessType" id="businessType" onChange={handleChange}  className='border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 py-3 px-6 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                <option value="1">Select business type</option>
                                <option value="Retailer">Retailer</option>
                                <option value="Wholesale">Wholesale</option>
                                <option value="Manufacturer">Manufacturer</option>
                            </select>
                        </div>
                        <div className='w-full px-3 sm:w-1/2'>
                            <label for="companyName"
                                className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'
                            >Company name<span className='star'>*</span></label>
                            <input
                                type="text"
                                name="companyName"
                                id="companyName"
                                placeholder='Enter company name'
                                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base' 
                                onChange={handleChange}
                                required/>

                        </div>
                    </div>
                    <div className='-mx-3 flex flex-wrap'>
                        <div className='w-full px-3 sm:w-1/2'>
                            <label for="tinNumber"
                                className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'
                            >TIN Number<span className='star'>*</span></label>
                            <input
                                type="number"
                                name='tinNumber'
                                id='tinNumber'
                                placeholder='Enter TIN Number'
                                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base'
                                onChange={handleChange}
                                required
                                minLength="9" // Minimum value of 9 numbers
                                maxLength="9" // Maximum value of 9 numbers
                                pattern="[0-9]{9}" // Pattern to enforce 9 digits
                            />
                        </div>
                        <div className='w-full px-3 sm:w-1/2'>
                            <label for="registrationDate"
                                className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'
                            >Registration date<span className='star'>*</span></label>
                            <input
                                type="date"
                                name="registrationDate"
                                id="registrationDate"
                                placeholder='Choose Date'
                                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base' 
                                onChange={handleChange}
                                required/>

                        </div>
                    </div>
                </form>
            </section>
            {/* Business Address */}
            <section className='mx-auto w-full max-w-[550px]' >
                <h1 className='mt-5 mb-5 text-3xl font-semibold leading-tight tracking-normal text-inherit antialiased'>Business Address</h1>
                <div>
                    <label for="address"
                        className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'>Provinces <span className='star'>*</span></label>
                    <select name="businessAddress" id="address" onChange={handleChange} className='border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
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

export default BusinessDetails
