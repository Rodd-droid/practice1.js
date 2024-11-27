const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); 

app.get('/', (req, res) => {
    res.render('index', { message1: "When people make fun of my code", message2: "but I'm just a Child Guy" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
