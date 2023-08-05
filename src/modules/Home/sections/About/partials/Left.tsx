import React from 'react'
import { motion } from 'framer-motion'
//
import { fadeTop, motionStep } from '@config/motion'


const Left = () => {

  // content
  const content = [
    "I am a Senior Full Stack Developer with a strong focus on detail and achieving goals. My ability to work independently and thrive on challenges makes me an invaluable asset to any team.",
    "I am known for my fast coding skills, excellent communication abilities, and my ability to always understand and deliver what clients want. My dedication to my craft is evident in my work, and I consistently strive to exceed expectations.",
    "Overall, I am a talented and driven individual who consistently delivers exceptional results.",
  ]
  return (
    <motion.div variants={fadeTop} {...motionStep} className='col-span-3' >

      <div className='space-y-4 mt-7 text-slate-400' >
        {content.map((e:string, i:number) => <p key={i} > {e} </p>)}
      </div>

    </motion.div>
  )
}

export default Left
