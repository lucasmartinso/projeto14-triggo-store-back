import signInSchema from "../Schema/signInSchema.js";

export default async function validateSchemaSignIn(req,res,next) { 
    const validation = signInSchema.validate(req.body); 
    if(validation.error) { 
        res.sendStatus(422);
        return;
    }
    next();
}