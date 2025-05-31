const nodemailer = require("nodemailer");

const mailSender = async(email, title, body)=>{
    try{
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            tls: {
                rejectUnauthorized: false,
            },
            auth:{
                user: process.env.MAIL_USER, 
                pass: process.env.MAIL_PASS,
            },
            secure: false,
        })
 
        let info = await transporter.sendMail({
            from: `StudyNotion || By Ayush ${process.env.MAIL_USER}`,
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,   
        })

        console.log("Node Main Info ->>  ",info);
        return info;
    }
    catch(error){
        console.log("Error In Mail Sending", error);
        return error.message
    }
}

module.exports = mailSender;