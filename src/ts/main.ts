import { mixPanelLocal } from "./services/Mixpanel"

addEventListener('load', ()=>{
  if(!localStorage.getItem('theme'))
    localStorage.setItem('theme', 'dark')

  mixPanelLocal()
    .trackVisit()
})
