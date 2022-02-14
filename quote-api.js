const express = require('express');
const morgan = require('morgan');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random',(req,res,next)=>{
  const randomQuotes=getRandomElement(quotes)
res.send({quote:randomQuotes})
})
app.get('/api/quotes',(req,res,next)=>{
const getQuotes=quotes.filter(author=>{
  return author.person===req.query.person
})
if(req.query.person){
  res.send({quotes:getQuotes});
}else{
  res.send({quotes:quotes})
}
});

app.post('/api/quotes',(req,res,next)=>{
  const newQuote=req.query.quote;
  const newPerson=req.query.person;
  if(newQuote!="&& newPerson!="){
    quotes.push({quote:newQuote,person:newPerson})
    res.send({quote:{newQuote,person:newPerson}})
  }else{
     res.status(400).send()
  }
})

app.listen(PORT,()=>{
  console.log(`Listening on Port ${PORT}`)
})