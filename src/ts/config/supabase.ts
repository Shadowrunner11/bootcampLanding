export const TOKEN = import.meta.env.PUBLIC_SUPABSE_TOKEN
export const API = import.meta.env.PUBLIC_SUPABASE_API

export const isSupabaseActive = Boolean(TOKEN && API)
