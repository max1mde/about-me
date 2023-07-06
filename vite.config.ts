import {defineConfig, UserConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }): UserConfig => {
  const config: UserConfig = {
    plugins: [react()],
    base: '/',
  };

  if (command !== 'serve') {
    config.base = '/about-me/';
  }

  return config;
});