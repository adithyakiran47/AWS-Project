import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const client = new SESClient({ region: "ap-south-1" });

export const handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    const params = {
      Destination: { ToAddresses: [process.env.DESTINATION_EMAIL] },
      Message: {
        Body: { Text: { Data: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}` }},
        Subject: { Data: "New Contact Form Submission" }
      },
      Source: process.env.SOURCE_EMAIL
    };

    await client.send(new SendEmailCommand(params));

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ message: "Email sent successfully!" })
    };

  } catch (err) {
    console.error("Error sending email:", err);

    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Failed to send email" })
    };
  }
};
