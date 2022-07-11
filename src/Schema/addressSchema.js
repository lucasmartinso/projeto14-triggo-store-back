import joi from "joi";  

const addressSchema = joi.object({
    address: joi.string().required()
}); 

export default addressSchema;