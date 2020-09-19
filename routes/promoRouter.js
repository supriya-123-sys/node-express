const express=require('express');
const bodyparser=require('body-parser');
const promoRouter=express.Router({mergeParams:true});
promoRouter.use(bodyparser.json());
promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('content-type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('will send all the details of promos to you');
})
.post((req,res,next)=>{
    res.end("will add the promo" +req.body.name+ 'with details' +req.body.description);
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end("put operation not supported");
})
.delete((req,res,next)=>{
    res.end('deleting all the promos');
});
promoRouter.route('/:promoId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send details of the promotions: ' + req.params.promoId +' to you!');
})

.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /promotions/'+ req.params.promoId);
})

.put((req, res, next) => {
  res.write('Updating the promotions: ' + req.params.promoId + '\n');
  res.end('Will update the promotions: ' + req.body.name + 
        ' with details: ' + req.body.description);
})

.delete((req, res, next) => {
    res.end('Deleting promotion: ' + req.params.promoId);
});
module.exports=promoRouter;