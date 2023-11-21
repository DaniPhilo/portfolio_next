import Hero from '@/components/Hero'
import SnippetsSlider from '@/components/SnippetsSlider';

export default async function Home() {

  return (
    <div className='relative h-full flex justify-center items-center gap-16 2xl:gap-32 p-4 lg:p-6'>
      <Hero />
      {/* <SnakeGame /> */}
      <div className='absolute top:0 left:0 lg:relative w-full h-full max-w-[800px]'>
        <div className="absolute w-1/2 h-1/2 lg:w-1/2 lg:h-2/3 top-[15%] left-[5%] lg:top-[-5%] lg:left-[-20%] 2xl:top-[0%] 2xl:left-[-20%] 2xl:w-2/3 2xl:full bg-[radial-gradient(ellipse_at_left,_#43D9AD,#43D9AD00_90%)] lg:bg-[radial-gradient(ellipse_at_center,_#43D9AD,#43D9AD00_60%)] blur-[80px] 2xl:skew-y-[5deg]"></div>
        <div className="absolute w-1/2 h-1/2 bottom-[5%] right-[10%] lg:bottom-[-30%] lg:right-0 2xl:right-[-10%] lg:w-full lg:h-full bg-[radial-gradient(ellipse_at_center,_#4D5BCE,#4D5BCE00_90%)] lg:bg-[radial-gradient(ellipse_at_center,_#4D5BCE,#4D5BCE00_70%)] blur-[70px] lg:blur-[100px] skew-x-[25deg] rotate-[90deg]"></div>
        <div className='hidden lg:block w-full h-full overflow-hidden'>
          <SnippetsSlider />
        </div>
      </div>

    </div>
  )
}
