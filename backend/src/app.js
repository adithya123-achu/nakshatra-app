import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import env from './config/env.js';
import routes from './routes/index.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(helmet());
app.use(cors({ origin: env.cors.origin, credentials: true }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: env.rateLimit.windowMs,
  max: env.rateLimit.max,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api', limiter);

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok', service: 'nakshatra-api' });
});

app.use('/api', routes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
