import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

export default function App() {
  return (
    <>
    <main>
      <h1>Pointercrate</h1>
      <h2>A list of the 150 hardest Geometry Dash levels, featuring a
      Time Machine to view the hardest levels from past eras, a Stats
      Viewer to track the top players who beat them, and a Submit Record
      section to send the levels you've completed.</h2>
      <div className="imagem_geometrydash"></div>
      <button>View list</button>
      <button>Starts viewer</button>
      <button>Time machine</button>
      <button>Submit record</button>
        </main>
    </>
  )
}