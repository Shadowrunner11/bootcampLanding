import type { Config } from 'mixpanel-browser'
import { APP_MODE, isDevelopment } from '.'

export const isMixpanelAvailable = Boolean(import.meta.env.PUBLIC_MIXPANEL_KEY)

export const isMixpanelActive = (!isDevelopment || localStorage.getItem('mixpanelStatus') === 'active')

export const MIXPANEL_KEY = import.meta.env.PUBLIC_MIXPANEL_KEY

const isDebug = APP_MODE ? APP_MODE === 'development' : import.meta.env.DEV 

export const mixPanelDefaultConfig: Partial<Config> = {
  debug: isDebug
}


