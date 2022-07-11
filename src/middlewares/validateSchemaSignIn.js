import signInSchema from "../Schema/signInSchema";

export default async function ValidateSignIn(req,res,next) { 
    const validation = signInSchema.validate(req.body); 
    if(validation.error) { 
        res.sendStatus(422);
        return;
    }
    next();
} 

