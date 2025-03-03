
import * as jwt from 'jsonwebtoken';

export const verifyToken = async (authHeader?: string) => {
  try {
    const token = authHeader?.replace('Bearer ', '');

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
