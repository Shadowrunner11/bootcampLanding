export function lensToggleSlider (_slider: any) : [boolean, ()=>any]{
  let slider = _slider
  let isDestroyed = false
  function toggleSlider(){
    if((window.screen.width  > 680) && slider.destroy && !isDestroyed){
      isDestroyed =  true
      return slider.destroy()
    }

    if(isDestroyed && (window.innerWidth <= 680)){
      isDestroyed = false
      slider = slider.rebuild()
    }
  }

  return [slider, toggleSlider]

}
