import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import * as path from 'path'

export default defineConfig({
  base: '/country/',
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
