import { ValidationError } from "yup";
import { schema } from "./schema.validaiton";
import { supabseLocal } from "../../ts/services/Supabse";
import type { IContact } from "../../ts/controllers/Contact";

function handleValidationError(error: unknown){
  if(error instanceof ValidationError)
    return error.inner.map(({ path })=> path)
}

export async function sendForm(data: Record<string, unknown>){
  try {
    const validatedData : IContact = schema
      .validateSync(data, { abortEarly: false })
    
    // TODO: add Sentry or another way to catch errors
    // TODO: this retunrs a thenavailable not a promise, should convert ?
    // this means that when ther is a error we will not notice
    supabseLocal()
      .sendFormContact(validatedData)

  } catch (error) {
    const errors = handleValidationError(error)
    console.error(error, errors)

    return errors
  }
}
