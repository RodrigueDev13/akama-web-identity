
import * as jwt from 'jsonwebtoken';
import { NextApiRequest } from 'next';

export const verifyToken = async (req: NextApiRequest) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      return null;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret_key');
    return decoded;
  } catch (error) {
    console.error('Erreur de vérification du token:', error);
    return null;
  }
};
