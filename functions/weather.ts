const axios = require("axios");
require('dotenv').config()

exports.handler = async (event, context) => {

    //https://naughty-engelbart-6b8874.netlify.app/.netlify/functions/weather
  
    const url = "https://api.openweathermap.org/data/2.5/forecast?q=Cirencester&appid=" +
    process.env["WEATHER"]+
    '&units=metric'
    const getWeather = async () => {
    try {
        console.log(url);
        //forecast/hourly
        const resp = await axios.get(
            url
       );
   
         // console.log(resp.data)
         return resp.data;
       } catch (error) { 
         console.log(error.response.body);
       }
     };
     const data = await getWeather();
 
     console.log(data);

     const response = {
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
      statusCode: 200,
      body: JSON.stringify(data)
    };
    return response;
  }


