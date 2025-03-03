
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import sgMail from '@sendgrid/mail';

const prisma = new PrismaClient();

// Configure SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

const contactHandler = async (req: Request, res: Response) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Save message to database
    const newMessage = await prisma.message.create({
      data: {
        name,
        email,
        subject,
        message
      }
    });

    // Send email notification (optional, depending on if SendGrid is configured)
    try {
      await sgMail.send({
        to: 'contact@akamagroupe.com', // Change to your receiving email
        from: 'noreply@akamagroupe.com', // Change to your verified sender
        subject: `Nouveau message de contact: ${subject}`,
        text: `
          Nom: ${name}
          Email: ${email}
          Sujet: ${subject}
          
          Message:
          ${message}
        `,
        html: `
          <h3>Nouveau message de contact</h3>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Sujet:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      });
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // Continue execution, don't fail the request if email fails
    }

    return res.status(200).json({ success: true, id: newMessage.id });
  } catch (error) {
    console.error('Error in contact API:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default contactHandler;
