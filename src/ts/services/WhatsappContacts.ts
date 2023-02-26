import { contactsAPI } from "../config/whatsapp"
import { Contact } from "../controllers/Contact"
import { Schedule, Whatsapp } from "../controllers/Whatsapp"

const defaultContacsRaw = [
  { contact: new Contact(51956332124), schedule: new Schedule(9, 19)}
]

const defaultContacts = defaultContacsRaw
  .map(({contact, schedule}) => new Whatsapp(schedule, contact))
  

export class WhatsappContacts {
  contacs = defaultContacts
  async fetchContacts(){
    const data = await fetch(contactsAPI)

    const parsedData = await data.json()

    return parsedData

  } 

  async getContacsAsync(){
    try {
      return (await this.fetchContacts()) ?? this.contacs
    } catch (error) {
      console.log(error)

      return this.contacs
    }
  }

  getContacts(forceSync = false){
    if(!contactsAPI || forceSync)
      return this.contacs
    
    return this.getContacsAsync()
  }



}
