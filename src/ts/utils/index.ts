export { $ } from './selectors'

export function prefixWithBase(href: string){
  const baseUrl = import.meta.env.BASE_URL

  if(!baseUrl)
    return href

  return `/${baseUrl}${href}`
}
