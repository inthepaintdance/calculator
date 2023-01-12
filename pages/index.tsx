import type { NextPage } from 'next'
import Calculator from '../components/Calculator'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-ink-blue '>
      <Calculator />
    </div>
  )
}

export default Home
