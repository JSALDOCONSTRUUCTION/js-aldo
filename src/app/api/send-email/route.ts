import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); // Initialize Resend SDK with API key
// Access the environment variable
const emailTo = process.env.EMAIL_TO;

// Convert the string into an array
const recipient = emailTo
  ? emailTo.split(',').map((email) => email.trim())
  : [];
const jsAldoDomain = (process.env.EMAIL_FROM as string) || '';

  console.log(recipient);

export async function POST(req: Request) {
  try {
    // Parse the request body
    const { firstName, lastName, email, phone, service, requirements } =
      await req.json();

    // Prepare the email content dynamically using the received data
    const emailContent = `
      <h1>Contact Request Details</h1>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Requirements:</strong> ${requirements}</p>
    `;

    // Send the email using Resend SDK to multiple recipients
    const { data, error } = await resend.emails.send({
      from: jsAldoDomain, // Sender email
      to: recipient, // Recipient emails
      subject: `New Contact Us Submission from ${firstName} ${lastName}`, // Subject
      html: emailContent, // HTML email content
    });

    // Handle any errors returned from Resend API
    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json(
        { success: false, error: error.message || 'An error occurred' },
        { status: 500 }
      );
    }

    // Return success response if email was sent successfully
    return NextResponse.json(
      { success: true, message: 'Email sent successfully!', data },
      { status: 200 }
    );
  } catch (error) {
    // Catch any unexpected errors
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: 'An unknown error occurred' },
      { status: 500 }
    );
  }
}
