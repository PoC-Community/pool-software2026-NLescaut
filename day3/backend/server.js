const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = 3000;
const cors = require('cors');

app.use(express.json()); 
app.use(express.urlencoded({extended: true,}));

app.get('/',(req,res) =>{
  res.json({
    message: 'Url shortner backend carré!',
    api: '/api/users (POST)',
    example: 'POST {url: "https//google.com"}',
    timestamp: new Date().toISOString()
  })
})

let urls =[];
app.post('/api/users', (req, res) => {

  const {originalUrl} = req.body

  if (!originalUrl){
    return res.status (400).json({ error:'true url please'})
  }
  const shortId =Math.random().toString(36).substr(2, 6);
  urls.push({
    id:shortId,
    originalUrl:originalUrl,
    createAt: new Date().toISOString()
  })
  res.status(201).json({
    shortId:'http://localhost3000/${shortId}',
    id: shortId
  })
});


//GET /api/urls/:id
app.get('/api/urls/:id', (req,res) => {
  const { id } =req.params;
  const foundUrl=urls.find(u => u.id === id);

  if (!foundUrl){
    return res.status(404).json({error: 'url pas trouvé'})
  }
  res.status(200).json(foundUrl)
})

//GET /:id
app.get('/:id',(req,res) =>{
  const { id } = req.params;
  const foundUrl=urls.find(u => u.id === id) 

  if (!foundUrl){
    return res.status(404).send({error: 'url pas trouvé'})
  }
})
//GET /api/urls
app.get('/api/urls', (res,req) =>{
  res.status(200).json(urls);
})


app.use(morgan('dev'));


app.get('/',(req, res) => {
  res.send('Hello World!');
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 

