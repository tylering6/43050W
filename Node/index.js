const nodemailer = require('nodemailer');

async function sendEmail() {
    // Create a transporter object
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'tylering6@gmail.com', // Your email
            pass: 'Archer##67'          // Your email password
        }
    });

    // Set up email data
    let mailOptions = {
        from: '"43050W" <tylering6@gmail.com>',    // Sender address
        to: 'W-Rizz@mvhsrobotics.org',             // List of recipients
        subject: 'New Contact Form Response',      // Subject line                            // HTML body
        html: 'Hello! <br> Someone has submitted a response to the contact form on w-rizz.mvhsrobotics.org. <br> Click on the link below to open the sheet and view the latest response. <br> https://docs.google.com/spreadsheets/d/1hKabnGH6Qj7kuSB2iOkWNwV32rLAAadC3GSPR31mNTQ/edit?usp=sharing'       
    };

    // Send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);
}

sendEmail().catch(console.error);

// Export the functions so they can be imported in other files
module.exports = {
    sendEmail,
};