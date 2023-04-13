import * as Joi from 'joi';

// primero se crean estos valores establecidos en el Joi, OJO con los tipos de dato ya que los numeros los hace string
export const JoiValidationSchema = Joi.object({
  MONGO_URL_DB: Joi.required(),
  PORT: Joi.number().default(3005),
  LIMIT_PAGINATION: Joi.number().default(6),
});
