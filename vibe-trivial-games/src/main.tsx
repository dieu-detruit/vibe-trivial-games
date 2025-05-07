import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// bodyにTailwindクラスを追加
document.body.classList.add('flex', 'flex-col', 'min-h-screen', 'w-full', 'p-0', 'm-0', 'overflow-x-hidden');
document.documentElement.classList.add('p-0', 'm-0', 'overflow-x-hidden');

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter basename="/vibe-trivial-games">
        <App />
      </BrowserRouter>
    </StrictMode>,
  )
}
