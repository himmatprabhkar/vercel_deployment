const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'himmatprabhkar@gmail.com',
        pass: 'zdsu bmmr zclc unvl'
    }
});

exports.sendEmail = (from, to, subject, text, html) => {

    const mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: text,
        html: html
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return reject(error);
            }
            console.log('Email sent successfully:', info.response);
            resolve(info);
        });
    });
}

const sendEmail1 = (from, to, subject, text, html) => {

    const mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: text,
        html: html
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return reject(error);
            }
            console.log('Email sent successfully:', info.response);
            resolve(info);
        });
    });
}

exports.sendEmailProductOrder = async (userEmail, username, orderId, totalAmount) => {
    try {
        
        const templatePath = path.join(__dirname, '../EmailTemplates/orderConfirmationEmail/orderConfirmationEmail.html');
        
        let emailTemplate = fs.readFileSync(templatePath, 'utf-8');

        emailTemplate = emailTemplate.replace('{{username}}', username)
                                     .replace('{{orderId}}', orderId)
                                     .replace('{{totalAmount}}', totalAmount);

        
        await sendEmail1(
            'himmatprabhkar@gmail.com', 
            userEmail, 
            'Your Order Has Been Placed Successfully', 
            'Your order has been placed successfully.', 
            emailTemplate 
        );
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

exports.sendNewOrder = async (userEmail, username, orderId, totalAmount) => {
    try {
        
        const templatePath = path.join(__dirname, '../EmailTemplates/orderConfirmationEmail/newOrderEmail.html');
        
        let emailTemplate = fs.readFileSync(templatePath, 'utf-8');

        emailTemplate = emailTemplate.replace('{{customerName}}', username)
                                     .replace('{{orderId}}', orderId)
                                     .replace('{{totalAmount}}', totalAmount)
                                     .replace('{{orderDate}}', "20-05-2024")
                                     .replace('{{ownerName}}', username);

        
        await sendEmail1(
            'himmatprabhkar@gmail.com', 
            userEmail, 
            'Your Order Has Been Placed Successfully', 
            'Your order has been placed successfully.', 
            emailTemplate 
        );
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};