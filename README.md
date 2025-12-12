🌩️ Serverless Contact Form Using AWS Lambda, API Gateway, SES & S3

A Proof of Concept (POC) for AWS Certification & Hands-On Practice

📌 Overview

This project is a fully serverless contact form application built using multiple AWS services.
It demonstrates how to build, secure, deploy, and monitor a modern serverless application while gaining real-world experience with core AWS components.

Users submit a contact form → the data is sent via API Gateway → processed by a Lambda function → email delivered using Amazon SES.

The frontend is hosted on Amazon S3 Static Website Hosting.

This POC covers practical skills relevant for:

AWS Cloud Practitioner (CLF-C02)

AWS Developer Associate (DVA-C02)

AWS Solutions Architect Associate (SAA-C03)

🧱 Architecture Diagram
User (Browser)
      |
      v
Amazon S3 (Static Website Hosting)
      |
      v
API Gateway (HTTPS Endpoint)
      |
      v
AWS Lambda (Node.js Email Handler)
      |
      v
Amazon SES (Simple Email Service)
      |
      v
Email Delivered to Recipient


CloudWatch monitors logs and errors.
SNS (optional) sends alerts if SES sending fails.

🚀 Features

✔ Fully serverless, scalable architecture

✔ Zero infrastructure management

✔ Real-time email sending via SES

✔ Secure API endpoint with CORS

✔ CloudWatch logging for debugging

✔ Deployed frontend on S3 bucket

✔ Optional SNS alerts for monitoring failures

✔ Free-tier friendly (zero cost for typical usage)

🛠️ AWS Services Used & Their Role
1️⃣ Amazon S3

Hosts the HTML/CSS/JS frontend.

Acts as a low-cost static website hosting.

Provides public URL for the contact form.

2️⃣ Amazon API Gateway

Exposes a secure HTTPS endpoint (/contact).

Handles CORS, HTTP methods, routing.

Integrates directly with Lambda.

3️⃣ AWS Lambda

Executes backend logic (Node.js).

Validates form data.

Uses AWS SDK to send an email via SES.

Serverless → no servers to manage.

4️⃣ Amazon SES (Simple Email Service)

Sends email notification containing form submission data.

Sandbox mode prevents spam (sender + receiver must be verified).

Production-ready email system.

5️⃣ Amazon CloudWatch

Stores Lambda logs.

Helps debug failures or errors.

Provides metrics for monitoring usage.

6️⃣ Amazon SNS (Optional but included)

Sends alerts to your email if:

Lambda fails

SES sends bounce/reject events

Adds monitoring capability for reliability.

7️⃣ IAM (Identity & Access Management)

Provides permissions for:

Lambda → SES

API Gateway → Lambda

S3 public access policy

📂 Project Structure
/project-root
│
├── index.html           # Frontend UI hosted on S3
├── README.md            # Documentation
│
└── lambda/
     └── index.js        # Lambda function code (SES email sender)

🧪 How the Application Works

User opens the S3-hosted website

Fills out the contact form

The browser sends form data using fetch() → API Gateway

API Gateway triggers the Lambda function

Lambda sends an email using Amazon SES

SES delivers the email to the verified recipient

CloudWatch logs the entire execution

(Optional) SNS sends alerts if issues occur

🔧 Lambda Function (Simplified Code Example)
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const client = new SESClient({ region: "ap-south-1" });

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);

    const params = {
      Destination: { ToAddresses: [process.env.DESTINATION_EMAIL] },
      Message: {
        Body: { Text: { Data: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}` }},
        Subject: { Data: "New Contact Form Submission" }
      },
      Source: process.env.SOURCE_EMAIL
    };

    await client.send(new SendEmailCommand(params));

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ message: "Email sent!" })
    };

  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Failed to send email" })
    };
  }
};

🌐 Hosting the Frontend on S3

Steps:

Create S3 bucket → disable “Block all public access”

Upload index.html

Enable Static Website Hosting

Add this bucket policy:

{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
    }
  ]
}


Open the Website Endpoint URL.

🧑‍💻 Skills Demonstrated (Great for AWS Certification)

Creating IAM roles & policies

Deploying Lambda functions

Understanding API Gateway integrations

Configuring CORS

Verifying domains/emails in SES

Monitoring logs in CloudWatch

Hosting websites on S3

Writing serverless backend code

Understanding regional constraints (SES sandbox)

Implementing SNS-based alerting

This project demonstrates hands-on experience with real AWS workflows.

📦 Deployment Checklist
Task	Status
Create S3 bucket & host static site	✔
Configure SES + verify email	✔
Build Lambda + IAM role	✔
Configure API Gateway	✔
Set CORS headers	✔
Deploy API	✔
CloudWatch logging	✔
SNS email alerts	Optional ✔
🎯 Future Enhancements

Add reCAPTCHA for spam protection

Add DynamoDB to store all submissions

Add CloudFront for CDN + HTTPS

Add custom domain using Route53

Add CI/CD pipeline using AWS CodePipeline
