import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Linkedin from './pages/Linkedin/Linkedin.jsx'
import { initTracking } from './utils/tracking'

initTracking()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Linkedin />
  </StrictMode>,
)
