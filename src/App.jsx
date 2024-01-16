import { motion } from "framer-motion"
import React from 'react'
import { useState } from 'react'

const App = () => {
  const [a, setA] = useState("false")
  return (

    <div className=' w-full h-screen bg-zinc-800 text-white flex items-center justify-center'>
      <div data-change={a} onClick={()=>setA(!a)} className='handle w-96 p-4 bg-green-500 rounded-full flex items-center justify-start'>
        <motion.div layout className='w-32 h-32 bg-green-700 rounded-full'></motion.div>
      </div>
    </div>
  )
}

export default App