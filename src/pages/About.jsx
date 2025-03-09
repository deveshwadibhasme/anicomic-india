import React from 'react'
import tree from '../assets/growing-tree.png'

const About = () => {
  return (
    <div className='max-w-screen w-full min-h-screen flex flex-col items-center justify-center'>
      
      <img className="h-[400px]" src={tree} alt="" />
    </div>
  )
}

export default About