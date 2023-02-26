import mixpanel, { Config } from "mixpanel-browser";
import { MIXPANEL_KEY, isMixpanelActive, isMixpanelAvailable, mixPanelDefaultConfig } from "../config/mixpanel";


const mixpanelInstance = isMixpanelAvailable ? mixpanel : undefined

export enum MixPanelEvents {
  VISIT = 'visito la web',
  CLICK = 'hizo click en cta',
  FORM = 'envio formulario'
}

export const ctaText = {
  whatsapp: 'para comunicarse a traves de whatsapp'
}

const blackListObsevers: any = []

export class MixPanelLocal {
  private static instance?: MixPanelLocal;
  private static localInstance = isMixpanelActive? mixpanelInstance : undefined

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
    MixPanelLocal.localInstance?.track(MixPanelEvents.CLICK, {
      description
    })
  }

  trackVisit(description?: string){
    MixPanelLocal.localInstance?.track(MixPanelEvents.VISIT, {
      description
    })
  }

  activate(){
    MixPanelLocal.localInstance = mixpanelInstance
  }

  deactivate(observer: unknown){
    if(blackListObsevers.some((blakList: any) => observer instanceof blakList ))
      throw new Error('not allowd')

    MixPanelLocal.localInstance = undefined
  }
}

export const mixPanelLocal = MixPanelLocal.defaultInstance
