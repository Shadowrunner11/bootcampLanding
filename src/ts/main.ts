import { mixPanelLocal } from "./services/Mixpanel"

addEventListener('load', ()=>{
  mixPanelLocal()
    .trackVisit()
})
