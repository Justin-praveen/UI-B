const express = require("express")
const {mod,kod,god,hod,pod} = require("./models")
const multer = require("multer")



const rout = express.Router()

// multer

const store = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,"./photos")
    },
    filename : (req,file,clb)=>{
        clb(null,file.originalname);
    }
})

const upload = multer({storage : store});

// routes s-3

rout.post("/Product",upload.single("pimg"),async(req,res)=>{
 
    const s = await new mod({
        pid : req.body.pid,
        pname : req.body.pname,
        pimg  : req.file.originalname,
        pprice : req.body.pprice,
        pstar : req.body.pstar, 
        pcat : req.body.pcat
        
    })
 
    if(s){
      await s.save()
      res.json({
        status : "sucessfull"
      })
    }else{
        res.json({
            status : "faild...!" 
        })
    }
})

// Company s-2

rout.post("/s2",upload.single("pimg"),async(req,res)=>{ 

    console.log(req.body)

    const j = await new hod({
        name : req.body.pname,
        pimg : req.file.originalname
    })

    if(j){
        await j.save().then((da)=>{
            res.json(da)  
        }).catch((er)=>{    
            console.log(er)
        })  
    }
})
  
// s-1   
rout.post("/s1",async(req,res)=>{
    const up = {
        dis : req.body.dis,
        bone : req.body.bone,
        btwo : req.body.btwo
    }

    const k = await kod.findOneAndUpdate({_id : "62deecbacde10750f660b8b6"},up)

    if(k){
        res.json(k)
    }
 

})

// b1 

// banner -1

rout.post("/b11",async(req,res)=>{
    const up =  await {
        first : req.body.first,
        sec : req.body.sec,
        
    }

    const k = await god.findOneAndUpdate({_id : "62def7caef2daf44c249ee02"},up)

    if(k){
        res.json(k)
    }

})

// b2

rout.post("/b22",async(req,res)=>{
    const up =  await {
        first : req.body.first,
        sec : req.body.sec,
        
    }

    const k = await pod.findOneAndUpdate({_id : "62def7ea19bafaf23973195b"},up)

    if(k){
        res.json(k)
    }

})

// get s-3

rout.get("/get",async(req,res)=>{
    await mod.find().then((sta)=>{
        res.json(sta)
    }).catch((er)=>{
        console.log(er)
    })
})

rout.get("/hod",async(req,res)=>{
    const h = await hod.find()
    if(h){
        res.json(h)
    }
    else{
        res.json("something went wrong..!")
    }
})
 
module.exports =  rout 

        