import adrressSchema from "../Schema/addressSchema"; 

export default function validateSchemaAdrress(req,res,next) { 
    const validation = adrressSchema.validate(req.body); 
    if(validation.error) { 
        res.sendStatus(422);
        return;
    } 
    next();
}