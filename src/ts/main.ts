import { mixPanelLocal } from "./services/Mixpanel"

addEventListener('load', ()=>{
  localStorage.setItem('theme', 'dark')
  mixPanelLocal()
    .trackVisit()
})
