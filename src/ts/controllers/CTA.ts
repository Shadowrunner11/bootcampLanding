import { WhatsappContactsObserver } from "../reactive";
import { mixPanelLocal } from "../services/Mixpanel";
import { WhatsappContacts } from "../services/WhatsappContacts";
import { $ } from "../utils";
import type { Whatsapp } from "./Whatsapp";

export function addCTAClikListener(dataCta: string) {
  $(`[data-cta="${dataCta}"]`)?.addEventListener('click', ({ target }) => {
    if (!(target instanceof HTMLAnchorElement)) return;

    mixPanelLocal().trackCta(target.textContent || '');
  })
}

export function changeWpHref(button: HTMLAnchorElement, conctacts: Whatsapp[]) {
  const [ firstWPContac ] = conctacts.filter(({ isAvailable }) => isAvailable)

  if (firstWPContac)
    button.target = '_blank'
  else
    button.target = '_self'

  button.href = firstWPContac?.linkString ?? "#contact"
}


// TODO: revisar hay q hacer overloading
export function addCTAWpClickListener(dataCta: string) {
  const serviceWp = new WhatsappContacts()

  const contacts = serviceWp.getContacts(true) as Whatsapp[]

  WhatsappContactsObserver.subscribe(contacts)

  $(`[data-cta="${dataCta}"]`)?.addEventListener('click', ({ currentTarget }) => {
    if (!(currentTarget instanceof HTMLAnchorElement)) return;

    mixPanelLocal().trackCta(currentTarget.textContent || '');

    changeWpHref(currentTarget, contacts)
  })

}
