import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const position = formData.get('position') as string;
    const company = formData.get('company') as string;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        // You'll need to set up environment variables for these
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'team@dubsof.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Position: ${position}
        Company: ${company || 'Not provided'}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Redirect back to the homepage with a success parameter
    return NextResponse.redirect(new URL('/?success=true', request.url), 303);
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.redirect(new URL('/?error=true', request.url), 303);
  }
} 