
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import contactHandler from './api/contact';
import loginHandler from './api/admin/login';
import messagesHandler from './api/admin/messages';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.post('/api/contact', (req, res) => {
  contactHandler(req, res);
});

app.post('/api/admin/login', (req, res) => {
  loginHandler(req, res);
});

app.get('/api/admin/messages', (req, res) => {
  messagesHandler(req, res);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
