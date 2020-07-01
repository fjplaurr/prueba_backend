const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: `${__dirname}/.env` });
} else {
  dotenv.config();
}

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

const router = express.Router();
function getPrueba() {
  return async (req, res, next) => {
    return res.status(200).send('vamos');
  }
}
router.get('/', getPrueba());
// Routes
app.use('/api/users', router);

// Error handling
app.use((req, res, next) => {
  const err = new Error('Not found');
  next(err);
});

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT,
  () => console.log(`Listening on port ${PORT}`));
