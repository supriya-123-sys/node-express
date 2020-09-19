const express=require('express');
const bodyparser=require('body-parser');
const leaderRouter=express.Router({mergeParams:true});
leaderRouter.use(bodyparser.json());
leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('content-type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('will send all the details of leaders to you');
})
.post((req,res,next)=>{
    res.end("will add the leaders" +req.body.name+ 'with details' +req.body.description);
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end("put operation not supported");
})
.delete((req,res,next)=>{
    res.end('deleting all the leaders');
});
leaderRouter.route('/:leaderId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send details of the leaders: ' + req.params.leaderId +' to you!');
})

.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /leaders/'+ req.params.leaderId);
})

.put((req, res, next) => {
  res.write('Updating the leaders: ' + req.params.leaderId + '\n');
  res.end('Will update the leaders: '+ req.body.name + 
        ' with details: ' + req.body.description);
})

.delete((req, res, next) => {
    res.end('Deleting leaders: ' + req.params.leaderId);
});
module.exports=leaderRouter;