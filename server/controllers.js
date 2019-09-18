//Controllers

const Note = require("./models");

module.exports = {
    all : (req,res)=>{
        Note.find().sort({_id:-1})
            .then(data=>res.json({info:data, msg:'success'}))
            .catch(err=>res.json({info:err, msg:'failure'}))
    },
    add : (req,res)=>{
        Note.create(req.body)
            .then(data=>res.json({info:data, msg:'success'}))
            .catch(err=>res.json({info:err, msg:'failure'}))
    },

}
