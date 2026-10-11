import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Privacy from './pages/Privacy/Privacy.jsx'
import { initTracking } from './utils/tracking'

initTracking()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Privacy />
  </StrictMode>,
)
