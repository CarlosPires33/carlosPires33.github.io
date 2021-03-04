const express = require('express');
const router = express.Router();
const Comment = require('./comment.model');

router.post('/comments', (req,res)=>{
  Comment
    .create(req.body)
    .then((data)=>{res.status(200).json(data)})
    .catch(error => {res.status(400).json(error)})
})

router.get('/comments', (req, res)=>{
  Comment.find((err, data)=>{
    if(err){
      res.json(err)
    } else { 
      res.json(data)
    }
  })
})

router.get('/comments/:id', (req, res)=> {
  Comment.findById(req.params.id, (err,data)=>{
    if(err){
      res.json(err)
    }else {
      res.json(data)
    }
  })
})

router.put('/comments/:id', (req,res)=>{
  Comment.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
      Comment.findOne({_id: req.params.id})
        .then( data =>{ res.status(200).json(data) })
        .catch( error => { res.status(400).json(error)})
    })
  
})

router.delete('/comments/:id', (req,res)=>{
  Comment.findByIdAndRemove({_id: req.params.id})
    .then(data => { res.status(200).json(data)})
    .catch(error => { res.status(400).json(error)})
})

module.exports = router;
