import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
plugins: [react()],
base: '/lab_2gif_master/', 
build: {
outDir: 'docs', 
}
})
