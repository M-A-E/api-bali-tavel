const { response } = require("express");
const { customermessage } = require("../../models");
const nodemailer = require("nodemailer");

const createMessage = async (req, res) => {
    try {
        const {
            fullName,
            email,
            phoneNumber,
            country,
            description
        } = req.body;

        const kirimEmail = async () => {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "havizhabdurrahman@gmail.com",
                    pass: "kxrz oifj mkqx tvul"
                }
            });
        
            const sendMail = transporter.sendMail({
                from: "havizhabdurrahman@gmail.com",
                to: "appis3979@gmail.com",
                subject: "hallo my self",
                text: "create message success"
            })
            console.log("send email message success")
        }

        if (!kirimEmail) {
            return console.log("failed")
        } else {
            kirimEmail()
            const response = await customermessage.create({
                fullName,
                email,
                phoneNumber,
                country,
                description
            })
            res.status(200).send({
                statusCode: 200,
                status: "success",
                message: "create data success",
                data: response
            })
        }


    } catch (error) {
        res.status(500).send({
            statusCode: 500,
            status: "error",
            message: error.message
        })
    }
}

module.exports = {
    createMessage
}