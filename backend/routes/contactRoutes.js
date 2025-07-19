import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, message } = req.body;

  console.log('Contact form data received:', { name, email, message });

  res.json({ message: 'Message Sent Successfully!' });
});

export default router;
