const nodemailer = require('nodemailer');
const log = console.log;

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'abhikhya.ashi@gmail.com', // TODO: your gmail account
        pass: 'ashi@3666' // TODO: your gmail password
    }
});

// Step 2
let mailOptions = {
    from: 'abhikhya.ashi@gmail.com', // TODO: email sender
    to: 'abhikhya.ashi@gmail.com', // TODO: email receiver
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!'
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs');
    }
    return log('Email sent!!!');
});