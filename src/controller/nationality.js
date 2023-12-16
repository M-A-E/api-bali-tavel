const { default: axios } = require("axios");
require("dotenv").config();

const getAllCountry = async (req, res) => {
    try {
        const url = process.env.API_COUNTRY;
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const response = await axios.get(url);
        const result = Object.values(response.data.data).map((item) => {
            return {
                name: item.country,
                region: item.region
            }
        })
        res.status(200).send({
            statusCode: 200,
            status: "success",
            message: "get all country",
            data: result
        })
    } catch (error) {
        res.status(500).send({
            statusCode: 500,
            status: "error",
            message: "server error"
        })
    }
}


module.exports = {
    getAllCountry
}