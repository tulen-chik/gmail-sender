const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST endpoint to handle bookings
app.post('/api/bookings', async (req, res) => {
  const { selectedDate, selectedTime, selectedSpecialist, selectedServices } = req.body;

  // Validate input
  if (!selectedDate || !selectedTime || !selectedSpecialist || !selectedServices) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Create the email message
// Создание сообщения электронной почты
  const message = `
    <div style="font-family: Arial, sans-serif; background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
        <h1 style="color: #007bff;">Подтверждение бронирования</h1>
        <p style="color: #555;">Уважаемый клиент,</p>
        <p style="color: #555;">Благодарим вас за выбор наших услуг! Ваше бронирование успешно подтверждено.</p>
        
        <h2 style="color: #333;">Детали вашего бронирования:</h2>
        <ul style="color: #555; list-style-type: none; padding: 0;">
            <li><strong>Дата:</strong> ${selectedDate}</li>
            <li><strong>Время:</strong> ${selectedTime}</li>
            <li><strong>Специалист:</strong> ${selectedSpecialist}</li>
            <li><strong>Услуги:</strong> ${selectedServices.join(', ')}</li>
        </ul>
        
        <p style="color: #555;">Если у вас возникли вопросы или вы хотите внести изменения в ваше бронирование, не стесняйтесь связаться с нами.</p>
        
        <p style="color: #555;">С нетерпением ждем встречи с вами!</p>
        
        <p style="color: #555;">С наилучшими пожеланиями,<br><strong>Название вашей компании</strong></p>
    </div>
`;

  // Set up Nodemailer transporter
  const transporter = nodemailer.createTransport({
    port: Number(process.env.SMTP_PORT),
    host: process.env.SMTP_HOST,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_USER_PASS,
    },
  });

  // Send email
  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to yourself or another recipient
      subject: 'New Booking Confirmation',
      html: message,
    });
    res.status(200).json({ message: 'Booking confirmed and email sent!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending confirmation email.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});