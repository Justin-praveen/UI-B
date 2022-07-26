const mongose = require("mongoose")

// s-3
const sch = new mongose.Schema({
    pid : {
        type : Number
    },
    pname: {
        type : String,
    },
    pimg :{
        type : String
    },
    pprice : {
        type : Number
    },
    pstar : { 
        type : Number
    },
    pcat : {
        type : String
    }



})

// s-1

const ki = new mongose.Schema({
    dis : {
        type : Number
    },
    bone : {
        type : String
    },
    btwo : {
        type : String
    }
})

// s-2

const stwo = new mongose.Schema({
    name : {
        type : String
    },
    pimg : {
        type : String
    }
})

// b1

const b1 = new mongose.Schema({
    first : String, 
    sec : String

})

// b2

const b2 = new mongose.Schema({
    first : String,
    sec : String

})

const mod = mongose.model("us",sch)
const kod = mongose.model("ioo",ki)
const hod = mongose.model("s2",stwo)
const god = mongose.model("s3",b1)
const pod = mongose.model("s4",b2)
module.exports = {mod,kod,hod,god,pod}

