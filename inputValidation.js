import Joi from "joi";

function validation(schema) {
  return function validateInfo(info) {
    return schema.validate(info, { abortEarly: false });
  };
}

const driverSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  time: Joi.string().min(3).max(50).required(),
  points: Joi.number().min(0).max(1000).default(0),
});

const updateDriverSchema = Joi.object({
  name: Joi.string().min(3).max(50),
  time: Joi.string().min(3).max(50),
  points: Joi.number().min(0).max(1000),
}).min(1);

const generatePositionSchema = (maxValue) => Joi.number().min(1).max(maxValue);

export const validateDriverInfo = validation(driverSchema);

export const validateUpdateDriverInfo = validation(updateDriverSchema);

export const validatePosition = (position, maxValue) =>
  generatePositionSchema(maxValue).validate(position);
