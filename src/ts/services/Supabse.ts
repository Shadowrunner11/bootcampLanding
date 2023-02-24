import { createClient } from "@supabase/supabase-js"
import { API, TOKEN, isSupabaseActive } from "../config/supabase"
import type { IContact } from "../controllers/Contact"


export class SupabaseContactLocal {
  private static thisInstance? : SupabaseContactLocal
  localClient

  private constructor(options?: any){
    this.localClient = isSupabaseActive ? 
      createClient(API, TOKEN, options) : undefined

  }

  static defaultInstance(){
    SupabaseContactLocal.thisInstance ??= new SupabaseContactLocal()

    return SupabaseContactLocal.thisInstance
  }

  sendFormContact(data: IContact){
    if(localStorage.getItem('alreadySended') === 'true')
      return 
  
    return this.localClient?.from('interested')
      .insert(data)
      .then(({ error })=> {
        if(error)
          return
        
        localStorage.setItem('alredySended', 'true')

        return data
      }, (reason)=> reason)
      
  }
}

export const supabseLocal = SupabaseContactLocal.defaultInstance
