import jwt from 'jsonwebtoken';
import env from '../config/env.js';

/**
 * JWT authentication middleware.
 * Verifies Bearer token and attaches decoded payload to req.user.
 */
export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, env.jwt.secret);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};

/**
 * Optional authentication — attaches user if token present, continues otherwise.
 */
export const optionalAuth = (req, _res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader?.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    try {
      req.user = jwt.verify(token, env.jwt.secret);
    } catch {
      // Token invalid — proceed without user
    }
  }

  next();
};

export default authenticate;
