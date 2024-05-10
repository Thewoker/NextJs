import { NextResponse } from "next/server";
const https = require('https');

export async function POST(req, res) {
  if (req) {
    const data = await req.json();
    console.log('Received data:', data);

    const send = {
      members: [{
        email_address: data.email,
        status: "subscribed",
        merge_fields: {
          FNAME: data.nombre,
          AMBIENTES: data.ambientes,
          CONSEJOS: data.consejos,
        }
      }]
    };

    const jsonData = JSON.stringify(send);
    const url = "https://us10.api.mailchimp.com/3.0/lists/ab3336de37";

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Buffer.from('LeoFJR:ce6d9951c66b7a2e051127f8a5901dc4-us10').toString('base64')
      }
    };

    const request = https.request(url, options, function(response) {
      let data = '';
      response.on("data", function(chunk) {
        data += chunk;
      });
      response.on("end", function() {
        console.log(JSON.parse(data));
      });
    });

    request.on('error', (e) => {
      console.error(`Problem with request: ${e.message}`);
    });

    request.write(jsonData);
    request.end();

    return NextResponse.json({ message: 'Datos recibidos correctamente' });
  } else {
    return NextResponse.json({ message: 'Error al recibir los datos' });
  }
}