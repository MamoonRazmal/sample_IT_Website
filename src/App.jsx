import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'tailwindcss/tailwind.css';
import './App.css'
import Landingpage from '../../Landingpage';
import Header from "../src/components/Header"
import Banner from './components/Banner';
import Experts from './components/Experts';
import Skills from './components/Skills';
import Plan from "./components/Plan"

function App() {
 

  return (
    <>
   
    <Header/>
    <Banner/>
    <Experts/>
    <Skills />
    <Plan />
    {/* <title>mamoon</title>
    <nav className='px-4 py-4 bg-purple-400 text-white '>
      <ul className='flex flex-grow'>
        <li className='mx-2 cursor-pointer'>Home</li>
        <li className='mx-2 cursor-pointer'>About</li>
        <li className='mx-2 cursor-pointer'>ContactUS</li>
      </ul>
    </nav>
    <h1 className="text-3xl font-bold underline ">
      Hello world!
    </h1> */}
   
    </>
  )
}

export default App
