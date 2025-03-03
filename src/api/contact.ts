
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import sgMail from '@sendgrid/mail';

const prisma = new PrismaClient();

// Configure SendGrid with your API key
sgMail.setApiKey('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');

const contactHandler = async (req: Request, res: Response) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, otherSubject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Determine the actual subject to use
    const finalSubject = subject === 'Autre' ? otherSubject : subject;

    // Save message to database
    const newMessage = await prisma.message.create({
      data: {
        name,
        email,
        subject: finalSubject,
        message
      }
    });

    // Send email notification using SendGrid template
    try {
      await sgMail.send({
        to: 'contact@akamagroupe.com', // Change to your receiving email
        from: 'noreply@akamagroupe.com', // Change to your verified sender
        templateId: 'd-c8f70b4740db44aaac50a7636c34a92a',
        dynamicTemplateData: {
          name: name,
          email: email,
          subject: finalSubject,
          message: message
        }
      });
      
      // Send confirmation email to the sender
      await sgMail.send({
        to: email,
        from: 'noreply@akamagroupe.com',
        subject: 'Confirmation de votre message - AKAMA GROUPE',
        text: `
          Bonjour ${name},
          
          Nous avons bien reçu votre message concernant "${finalSubject}".
          Notre équipe va l'examiner et vous répondra dans les plus brefs délais.
          
          Cordialement,
          L'équipe AKAMA GROUPE
        `,
        html: `
          <h3>Bonjour ${name},</h3>
          <p>Nous avons bien reçu votre message concernant <strong>"${finalSubject}"</strong>.</p>
          <p>Notre équipe va l'examiner et vous répondra dans les plus brefs délais.</p>
          <p>Cordialement,<br>L'équipe AKAMA GROUPE</p>
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
