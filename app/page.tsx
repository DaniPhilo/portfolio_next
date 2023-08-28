import Hero from '@/components/Hero'
import SnakeGame from '@/components/SnakeGame'
import SnippetsSlider from '@/components/SnippetsSlider';

const snippets = [1, 2, 3, 4, 5, 6, 7];

export default function Home() {
  return (
    <div className='h-full flex justify-center items-center gap-32 p-6'>
      <Hero />
      {/* <SnakeGame /> */}
      <div className='relative w-full h-full max-w-[500px]'>
        <div className="absolute top-[-20%] left-[-40%] w-full h-full bg-[radial-gradient(ellipse_at_center,_#43D9AD,#43D9AD00_60%)] blur-[100px] skew-y-[20deg]"></div>
        <div className="absolute bottom-[-30%] right-[-10%] w-full h-full bg-[radial-gradient(ellipse_at_center,_#4D5BCE,#4D5BCE00_70%)] blur-[100px] skew-x-[25deg] rotate-[90deg]"></div>
        <div className='w-full h-full overflow-hidden'>
          <SnippetsSlider snippets={snippets} />
        </div>
      </div>

    </div>
  )
}
