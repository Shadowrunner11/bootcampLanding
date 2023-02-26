export const APP_MODE = import.meta.env.PUBLIC_APP_MODE

export const isDevelopment = import.meta.env.DEV || APP_MODE === 'development'

