const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true,}));

app.use(morgan('dev'));

app.use((req,res,next) =>{
  res.status(500).send("erreur serveur")
});
app.use((req,res,next) =>{
  res.status(404).send("page not found")
});

app.get('/',(req, res) => {
  res.send('Hello World!');
});


app.use((req,res,next) =>{
  res.status(500).render('500',{
    title:'500'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 

