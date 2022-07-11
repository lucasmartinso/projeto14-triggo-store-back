import addressSchema from "../Schema/addressSchema.js"; 

export default function validateSchemaAdrress(req,res,next) { 
    const validation = addressSchema.validate(req.body); 
    if(validation.error) { 
        res.sendStatus(422);
        return;
    } 
    next();
}