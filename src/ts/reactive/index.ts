import { Contact } from "../controllers/Contact";
import { Schedule, Whatsapp } from "../controllers/Whatsapp";
import { MixPanelLocal } from "../services/Mixpanel";

export class WhatsappContactsObserver {
  static contactLists: Whatsapp[][] = []
  static subscribe(contactList: Whatsapp[]){
    WhatsappContactsObserver.contactLists.push(contactList)
  }

  static clear(){
    WhatsappContactsObserver.contactLists
      .forEach(contactList => contactList.splice(0))
  }

  static forceActivateAttention(number: number){
    WhatsappContactsObserver.clear()
    const whatsapp = new Whatsapp( new Schedule(), new Contact(number))

    WhatsappContactsObserver.contactLists.forEach(
      contactList => contactList.push(whatsapp)
    )
  }
}

export class MixpanelObserver {
  static mixPanelInstance: MixPanelLocal

  static subscribe(mixpanelInstance: MixPanelLocal){
    MixpanelObserver.mixPanelInstance = mixpanelInstance
  }

  static deactivate(){
    MixpanelObserver.mixPanelInstance.deactivate(MixpanelObserver)
  }

  static activate(){
    MixpanelObserver.mixPanelInstance = MixPanelLocal.defaultInstance()
  }

}
