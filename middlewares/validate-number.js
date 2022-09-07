'use strict';

function validator (req,res,next){
    
    if(req.query.num && !isNaN(req.query.num)){     
        next();
    }else{ 
        next('Error_500:the input is missing or it is not number!');
    }
}
module.exports=validator