AWS Serverless Contact Form – Proof of Concept (POC)

A fully serverless Contact Form application built using AWS services to demonstrate hands-on understanding of cloud-native architecture, API integration, and event-driven email notifications.

This project is designed as a practical POC for AWS certification preparation, focusing on real-world usage while staying within the AWS Free Tier.

🔹 Project Overview

This application allows users to submit messages through a professionally designed web form.
Submitted data is securely processed by AWS Lambda and delivered as email notifications using AWS messaging services.

The frontend is statically hosted, while the backend is fully serverless, ensuring scalability, reliability, and low cost.

🧱 Architecture
User Browser
   ↓
S3 Static Website (HTML, CSS, JavaScript)
   ↓
API Gateway (REST API)
   ↓
AWS Lambda (Backend Processing)
   ↓
AWS SNS / SES (Email Notification)

🚀 AWS Services Used & Their Role
1️⃣ Amazon S3 (Static Website Hosting)

Hosts the frontend (HTML, CSS, JavaScript)

Provides public access via a static website endpoint

Cost-effective and highly available

2️⃣ Amazon API Gateway

Exposes a REST API endpoint (POST /contact)

Handles CORS and request routing

Acts as the bridge between frontend and backend

3️⃣ AWS Lambda

Processes form submissions

Parses incoming JSON data

Triggers email notifications

Fully serverless with automatic scaling

4️⃣ Amazon SNS / Amazon SES

Sends email notifications when a form is submitted

Supports verified email identities

Reliable message delivery with monitoring

5️⃣ Amazon CloudWatch

Stores Lambda execution logs

Used for debugging and monitoring

Enables future alarms and alerts

✨ Key Features

Serverless architecture (no servers to manage)

Professional, responsive glass-morphism UI

Secure API communication using HTTPS

Email notification on successful form submission

Real-time success and error feedback on UI

Free-tier friendly design

🖥️ Frontend Highlights

Minimalist dark-mode UI

Responsive layout for all devices

User-friendly confirmation messages:

“Message received. I’ll reach out to you soon.”

Form validation and submit status handling

📩 Backend Workflow

User submits the form

API Gateway receives the request

Lambda function processes the request

Email notification is sent via SNS / SES

Success response returned to frontend

🔐 Security & Best Practices

No AWS credentials exposed in frontend

IAM roles used for service permissions

CORS configured explicitly in API Gateway

Email identities verified in AWS

💰 Cost Consideration

This project is designed to run entirely within AWS Free Tier limits for learning and demonstration purposes.

S3 static hosting: negligible cost

Lambda: free tier eligible

API Gateway: free tier eligible

SNS / SES: free tier eligible (low volume)

📌 Use Cases

Portfolio project for cloud roles

AWS certification hands-on practice

Understanding serverless architecture

Real-world API + email integration example

📂 Repository Structure
/
├── index.html
└── README.md

🧠 Learning Outcomes

Hands-on experience with AWS serverless services

Understanding frontend-backend decoupling

Practical API Gateway + Lambda integration

Email automation using cloud-native services

Real-world debugging using CloudWatch

📄 License

This project is created for educational and demonstration purposes.

✅ Status: Completed & Deployed
🌐 Hosted on: Amazon S3
☁️ Backend: AWS Serverless Stack
