import { isMixpanelAvailable } from "../../ts/config/mixpanel"
import { isSupabaseActive } from "../../ts/config/supabase"


export const options = [
    {
      "label": "Mixpanel", 
      "id": "mixpanel", 
      "infoURL": "https://developer.mixpanel.com/docs",
      "description":"Trackeamos eventos como clicks en los CTA y visitar a la web",
      "type": "switch",
      "isAvailable": isMixpanelAvailable
    },
    {
      "label": "Supase", 
      "id": "supabase", 
      "infoURL": "https://supabase.com/docs",
      "isAvailable": isSupabaseActive,
      "description": "Saas para guardar la data en postgres"
    },
    {
      "label": "Atencion por Whatsapp",
      "description": "Forzar que este disponible la atencion por whatsapp al hacer click en inscribirse",
      "id": "channelWhatsapp",
      "isAvailable": true,
      "defaultOf": true
    }
  ]

