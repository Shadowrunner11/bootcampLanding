export { $, $$ } from './selectors'

export function prefixWithBase(href: string){

  if(!import.meta.env.PROD)
    return href

  return `${import.meta.env.PUBLIC_BASE_PATH ?? ''}${href}`
}
