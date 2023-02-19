export function $(selector: string, node = document.body){
  return node.querySelector(selector)
}

export function $$(selector: string, node = document.body){
  return [...node.querySelectorAll(selector)]
}
