const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // allow all during demo; restrict in prod

app.get('/hello', (req, res) => {
  res.json({ msg: 'hello from backend 👋' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on ${PORT}`));
