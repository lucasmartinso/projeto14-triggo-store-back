import joi from "joi";  

const adrressSchema = joi.object({
    adrress: joi.string().required()
}); 

export default adrressSchema;