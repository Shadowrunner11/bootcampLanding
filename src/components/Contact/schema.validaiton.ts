import { number, object, string } from 'yup'

export const schema = object().shape({
  name: string().required(),
  email: string().required().email(),
  phone: number().required()/* .test( phone => Number.isNaN(Number(phone))) */
})
