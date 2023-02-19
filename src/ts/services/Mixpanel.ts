import mixpanel, { Config } from "mixpanel-browser";
import { MIXPANEL_KEY, isMixpanelAvailable, mixPanelDefaultConfig } from "../config/mixpanel";

const mixpanelInstance = isMixpanelAvailable ? mixpanel : undefined

export enum MixPanelEvents {
  VISIT = 'visito la web',
  CLICK = 'hizo click en cta',
  FORM = 'envio formulario'
}

export const ctaText = {
  whatsapp: 'para comunicarse a traves de whatsapp'
}

export class MixPanelLocal {
  private static instance: MixPanelLocal;

  private constructor(options: Partial<Config>){
    mixpanelInstance?.init( MIXPANEL_KEY, options)
  }

  static defaultInstance(options?: Partial<Config>){
    MixPanelLocal.instance ??= new MixPanelLocal({
      ...mixPanelDefaultConfig,
      ...options
    })

    return MixPanelLocal.instance
  }

  trackCta(description: string){
    mixpanelInstance?.track(MixPanelEvents.CLICK, {
      description
    })
  }

  trackVisit(description?: string){
    mixpanelInstance?.track(MixPanelEvents.VISIT, {
      description
    })
  }
}

export const mixPanelLocal = MixPanelLocal.defaultInstance
