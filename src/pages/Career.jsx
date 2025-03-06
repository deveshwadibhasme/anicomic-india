import Contruction from '../assets/under-construction.png'

const Career = () => {
  return (
    <div className='mt-20 flex items-center justify-center min-h-[500px] text-amber-50 bg-black'>
      <div className='bg-white w-80 md:w-xl h-64 md:h-96 animate-pulse'>
      <img src={Contruction} className='mix-blend-difference h-full w-full' alt="under-construction" />
      </div>
    </div>
  )
}

export default Career