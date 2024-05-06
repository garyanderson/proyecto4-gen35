import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Define el middleware personalizado para habilitar CORS
function corsMiddleware() {
  return (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    next();
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    middleware: [
      corsMiddleware()
    ]
  }
})
