
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import loginHandler from './api/admin/login';
import messagesHandler from './api/admin/messages';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Routes - Contact endpoint removed as we're now using SendGrid API directly
app.post('/api/admin/login', (req, res) => {
  loginHandler(req, res);
});

app.get('/api/admin/messages', (req, res) => {
  messagesHandler(req, res);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
