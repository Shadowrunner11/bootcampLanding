import { $$ } from "../../ts/utils/selectors"

export function clickHandle(node?: Element){
  if(!(node instanceof HTMLElement))
    return

  $$('svg', node)?.forEach(element => {

    element.classList.toggle('swap-on')
    element.classList.toggle('swap-off')
  })
}
