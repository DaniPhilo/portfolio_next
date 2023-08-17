import Hero from '@/components/Hero'
import SnakeGame from '@/components/SnakeGame'

export default function Home() {
  return (
    <div className='h-full flex justify-center items-center gap-32'>
      <Hero />
      <SnakeGame />
    </div>
  )
}
