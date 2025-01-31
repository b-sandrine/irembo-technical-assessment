import React, { useState } from 'react'

function ProductInformation({ updateFormData, validationErrors }) {
 
    const [otherReason, setOtherReason] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target;
        updateFormData(name, value);
        if (name === "purposeOfImportation" && value === "Other") {
            setOtherReason(true)
        }
    };

    return (
        <div className='items-center justify-center p-12'>
            {/* Importation Details  */}
            <section className='mx-auto w-full max-w-[550px]'>
                <h1 className='section-header'>Importation details</h1>
                <form action="">
                    <div>
                        <label
                            className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'
                            for="purposeOfImportation">Purpose of importation <span className='star'>*</span></label>
                        <select required name="purposeOfImportation" id="purposeOfImportation" onChange={handleChange} className='input border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                            <option value="1">Enter the purpose of importation</option>
                            <option value="Direct sale">Direct sale</option>
                            <option value="Personal use">Personal use</option>
                            <option value="Trial use">Trial use</option>
                            <option value="Other">Other</option>
                        </select>
                    {validationErrors.purposeOfImportation && <p className="error">{validationErrors.purposeOfImportation}</p>}

                    </div>
                    {
                        otherReason && otherReason === true && (
                            <div>
                                <label
                                    className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'
                                    for="other_reason">Specify purpose of importation <span className='star'>*</span></label>
                                <input
                                    type="text"
                                    name="other_reason"
                                    id="other_reason"
                                    placeholder='Other reason'
                                    className='input w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base'
                                    onChange={handleChange}
                                    required />
                    {validationErrors.other_reason && <p className="error">{validationErrors.other_reason}</p>}

                            </div>
                        )
                    }
                </form>
            </section>
            <section>
                <h1 className='section-header'>Product details</h1>
                <form action="">
                    <div>
                        <label
                            className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'
                            for="productCategory">Product Category <span className='star'>*</span></label>
                        <select required name="productCategory" id="productCategory" onChange={handleChange} className='input border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                            <option value="1">Enter product category</option>
                            <option value="General purpose">General purpose</option>
                            <option value="Construction material">Construction material</option>
                            <option value="Chemicals">Chemicals</option>
                        </select>
                    {validationErrors.productCategory && <p className="error">{validationErrors.productCategory}</p>}

                    </div>

                    <div className='-mx-3 flex flex-wrap'>
                        <div className='w-full px-3 sm:w-1/2'>
                            <label
                                className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'
                                for="productName">Product name <span className='star'>*</span></label>
                            <input
                                type="text"
                                name="productName"
                                id="productName"
                                placeholder='Enter product name'
                                className='input w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base'
                                onChange={handleChange}
                            />
                    {validationErrors.productName && <p className="error">{validationErrors.productName}</p>}

                        </div>
                        <div className='w-full px-3 sm:w-1/2'>
                            <label
                                className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'
                                for="weight">Weight (kg)</label>
                            <input
                                type="number"
                                name="weight"
                                id="weight"
                                placeholder='Weight (kg)'
                                className='input w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base'
                                onChange={handleChange}
                            />

                        </div>
                    </div>

                    <div>
                        <label
                            className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'
                            for="descriptionOfProducts">Description of product[s]<span className='star'>*</span></label>
                        <textarea
                            name="descriptionOfProducts"
                            id="descriptionOfProducts"
                            placeholder='Enter the description of your products'
                            cols="20"
                            rows="5"
                            className='input w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base'
                            required
                            onChange={handleChange}></textarea>
                    {validationErrors.descriptionOfProducts && <p className="error">{validationErrors.descriptionOfProducts}</p>}

                    </div>

                    <div className='-mx-3 flex flex-wrap'>
                        <div className='w-full px-3 sm:w-1/2'>
                            <label
                                className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'
                                for="unitOfMeasurement">Unit of measurement <span className='star'>*</span></label>
                            <select required name="unitOfMeasurement" id="unitOfMeasurement" onChange={handleChange} className='input border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                <option value="">Select unit of measurement</option>
                                <option value="Kgs">Kgs</option>
                                <option value="Tonnes">Tonnes</option>
                            </select>
                    {validationErrors.unitOfMeasurement && <p className="error">{validationErrors.unitOfMeasurement}</p>}

                        </div>
                        <div className='w-full px-3 sm:w-1/2'>
                            <label
                                className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400'
                                for="quantityOfProduct">Quantity of product[s]<span className='star'>*</span></label>
                            <input
                                type="number"
                                name="quantityOfProduct"
                                id="quantityOfProduct"
                                placeholder='Enter quantity of products'
                                className='input w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base'
                                onChange={handleChange}
                                required />
                    {validationErrors.quantityOfProducts && <p className="error">{validationErrors.quantityOfProducts}</p>}

                        </div>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default ProductInformation
