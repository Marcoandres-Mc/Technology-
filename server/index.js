import {connectBd} from './db.js'
import app from './app.js'


connectBd();
const PORT = 3500;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});