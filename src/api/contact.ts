
import { Request, Response } from 'express';
import sgMail from '@sendgrid/mail';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Save message to database
    await prisma.message.create({
      data: {
        name,
        email,
        subject,
        message
      }
    });

    // Send email via SendGrid
    const msg = {
      to: process.env.ADMIN_EMAIL || 'admin@akamagroupe.com',
      from: process.env.SENDGRID_FROM_EMAIL || 'contact@akamagroupe.com',
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
    };

    await sgMail.send(msg);
    
    res.status(200).json({ message: 'Message envoyé avec succès' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    res.status(500).json({ message: 'Erreur lors de l\'envoi du message' });
  }
}
