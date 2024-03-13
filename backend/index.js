// server.js

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const nodemailer = require('nodemailer')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 6000 // Choose any port you prefer

app.use(bodyParser.json())
app.use(cors())

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sanrdushimimana@gmail.com', // Your email address
    pass: 'ybml soro dqjj tdgk', // Your email password
  },
})

// Endpoint to handle form data submission
app.post('/api/v1/registerDetails', (req, res) => {
  // Retrieve data from the request body
  const {
    businessAddress,
    businessOwnerAddress,
    businessType,
    citizenship,
    companyName,
    countryCode,
    descriptionOfProducts,
    email,
    nationalID,
    otherNames,
    passportNumber,
    phoneNumber,
    productCategory,
    purposeOfImportation,
    quantityOfProduct,
    registrationDate,
    surname,
    tinNumber,
    unitOfMeasurement,
    weight
  } = req.body

  const mailOptions = {
    from: 'igihozocolombe2003@gmail.com',
    to: email, // g.ishimwe@irembo.com
    subject: 'Registered User Payload',
    html: `
      <p><strong>Business Owner Details:</strong></p>
      <p> Names : ${surname} ${otherNames} <p>
      <p>Citizenship: ${citizenship}</p>
      <p>National ID: ${nationalID}</p>
      <p>Passport ID: ${passportNumber}</p>
      <p>Telephone: ${countryCode} ${phoneNumber}</p>
      <p>Email: ${email}</p>
      <br>
      <p><strong>Business Details:</strong></p>
      <p>Business Type: ${businessType}</p>
      <p>Company Name: ${companyName}</p>
      <p>TIN Number: ${tinNumber}</p>
      <p>Registration Date: ${registrationDate}</p>
      <p>Business Province: ${businessAddress}</p>
      <br>
      <p><strong>Product Information:</strong></p>
      <p>Purpose of Importation: ${purposeOfImportation}</p>
      <p>Category: ${productCategory}</p>
      <p>Weight (kg): ${weight}</p>
      <p>Unit of Measurement: ${unitOfMeasurement}</p>
      <p>Quantity: ${quantityOfProduct}</p>
      <p>Description: ${descriptionOfProducts}</p>
    `,
  }

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error)
      res.status(500).json({ message: 'An error occurred while sending email' })
    } else {
      console.log('Email sent:', info.response)
      res.status(200).json({ message: 'Details registered successfully' })
    }
  })
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})