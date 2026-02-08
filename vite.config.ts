import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    base: '/etyadi-restaurant/',  // ← Your exact GitHub repo name (no username)
    server: { port: 3000, host: '0.0.0.0' },
    plugins: [react()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(process.env.GEMINI_API_KEY || 'AIzaSyBVVzZVy2k_BmLm74-JfHAgclxs64ISsSU'),
      'process.env.APIKEY': JSON.stringify(process.env.GEMINI_API_KEY || 'AIzaSyBVVzZVy2k_BmLm74-JfHAgclxs64ISsSU')
    },
    // ... rest unchanged
  }
})
});
