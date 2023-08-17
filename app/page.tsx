import Hero from '@/components/Hero'
import SnakeGame from '@/components/SnakeGame'
import SnippetsSlider from '@/components/SnippetsSlider';

const snippets = [1, 2, 3, 4, 5, 6, 7];

export default function Home() {
  return (
    <div className='h-full flex justify-center items-center gap-32 p-6'>
      <Hero />
      {/* <SnakeGame /> */}
      <div className='w-full max-w-[500px] h-full overflow-hidden'>
        <SnippetsSlider snippets={snippets} />
      </div>
    </div>
  )
}
