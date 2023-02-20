import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

const isGithubActions = process.env.GITHUB_ACTIONS
// https://astro.build/config
export default defineConfig({
  ...(isGithubActions? { 
    site: 'https://astronaut.github.io', 
    base: '/bootcampLanding'
  } : {}),
  integrations: [tailwind()]
});
