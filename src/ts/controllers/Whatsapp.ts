import { defaultText, whatsappURL } from "../config/whatsapp"
import type { Contact } from "./Contact"

export class Schedule {
  from?
  to?

  constructor(from?: number, to?: number){
    this.from = from
    this.to = to
  }

  get isInTime(){
    if(!this.to || !this.from)
      return true
  
    const currenTime = new Date().getUTCHours()
    return currenTime <= (this.to ?? 0) && currenTime >= (this.from ?? 23)
  }
}


export class Whatsapp {
  schedules: Schedule[] | Schedule
  text: string;
  contact: Contact;


  constructor(schedules: Schedule[] | Schedule, conctact: Contact, text = defaultText ){
    this.schedules = schedules
    this.contact = conctact
    this.text = text
  }

  get wpText(){
    return `${this.contact.name|| ''}${this.text}`
  }

  get link(){
    const wpURL = new URL(whatsappURL)
    const { searchParams } =  wpURL

    searchParams.append('text', this.wpText)
    searchParams.append('phone', this.contact.phone.toString())


    return wpURL
  }

  get isAvailable(){
    if(Array.isArray(this.schedules))
      return Boolean(this.schedules.find(schedule => schedule.isInTime))

    return this.schedules.isInTime
  }

  get linkString(){
    return this.link.toString()
  }

}
