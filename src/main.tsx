import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyTasks from './MyTasks.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyTasks />
  </StrictMode>,
)
