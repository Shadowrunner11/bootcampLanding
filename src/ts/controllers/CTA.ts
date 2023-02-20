import { mixPanelLocal } from "../services/Mixpanel";
import { $ } from "../utils";

export function addCTAClikListener(dataCta: string){
  $(`[data-cta="${dataCta}"]`)?.addEventListener('click', ({ target }) => {
    if (!(target instanceof HTMLAnchorElement)) return;

    mixPanelLocal().trackCta(target.textContent || '');
  })
}
