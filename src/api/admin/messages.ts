
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { verifyToken } from '@/lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Verify authentication
  const user = await verifyToken(req);
  if (!user) {
    return res.status(401).json({ message: 'Non autorisé' });
  }

  if (req.method === 'GET') {
    try {
      const messages = await prisma.message.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      });

      res.status(200).json(messages);
    } catch (error) {
      console.error('Erreur lors de la récupération des messages:', error);
      res.status(500).json({ message: 'Erreur serveur' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
