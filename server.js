import express from 'express';
import path from 'path';

const app = express();
const port = 3000;
app.use(express.static('public'));

app.get('/', (rec, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

app.listen(process.env.PORT || 3000, err => err ? console.log(err) : console.log(`Server runs under ${port} port.`));
