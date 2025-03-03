
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  try {
    const { email, password } = req.body;

    // Find admin by email
    const admin = await prisma.admin.findUnique({
      where: { email },
    });

    if (!admin) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }

    // In a real application, you would hash the password and compare
    // For demo purposes, we're using plain text comparison
    // This should be replaced with proper password hashing in production
    if (admin.password !== password) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: admin.id, email: admin.email },
      process.env.JWT_SECRET || 'secret_key',
      { expiresIn: '8h' }
    );

    res.status(200).json({ token });
  } catch (error) {
    console.error('Erreur de connexion:', error);
    res.status(500).json({ message: 'Erreur lors de la connexion' });
  }
}
