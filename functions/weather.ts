const axios = require("axios");
require('dotenv').config()

exports.handler = async event => {


    //https://naughty-engelbart-6b8874.netlify.app/.netlify/functions/weather
    console.log();
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

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  }




  /*
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));
   
    const ip=req.headers['x-forwarded-for']?.split(".")?.slice(0,3)?.join(".") || "no";



    
    if(ip=="209.93.245"){
        context.res = {
            
            body: ip+"https://api.openweathermap.org/data/2.5/weather?q=Cirencester,uk&APPID="+process.env['WEATHER']
        }; 
        return;
    }
   
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 
        body: process.env['WEATHER']//req//.headers['x-forwarded-for']//+ip//responseMessage
    };
   
};

export default httpTrigger;
*/