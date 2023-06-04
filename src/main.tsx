import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { SWRConfigProvider } from './swr/SWRConfig.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SWRConfigProvider>
      <App />
    </SWRConfigProvider>
  </StrictMode>,
)
