import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greet from './components/Greet'

function App() {

  return (
    <>
      <Greet name = "Rahul Sharma" course = "Course: Computer Science" marks = "Marks: 85"/>
      <Greet name = "Anita Verma" course = "Course: Information Technology" marks = "Marks: 92"/>
      <Greet name = "Rohan Gupta" course = "Course: Electronics" marks = "Marks: 78"/>
    </>
  )
}

export default App