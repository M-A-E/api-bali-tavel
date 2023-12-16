const nodemailer = require("nodemailer")

const kirimEmail = async () => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "appis3979@gmail.com",
            pass: "xrka kvle rhvo wjhk"
        }
    });

    const sendMail = transporter.sendMail({
        from: "appis3979@gmail.com",
        to: "havizhabdurrahman@gmail.com",
        subject: "hallo my self",
        text: "hallo"
    })
    console.log("send email message success")
}

kirimEmail()