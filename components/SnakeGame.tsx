const SnakeGame = () => {
  return (
    <div className="relative w-[400px] h-[400px] border border-line-color">
      <div className="absolute top-[-35%] left-[-35%] w-2/3 h-2/3 bg-[radial-gradient(ellipse_at_center,_#43D9AD,#43D9AD00_70%)] blur-[80px] skew-x-[15deg]"></div>
      <div className="absolute bottom-[-35%] right-[-35%] w-2/3 h-2/3 bg-[radial-gradient(ellipse_at_center,_#4D5BCE,#4D5BCE00_80%)] blur-[80px] skew-x-[15deg] rotate-[90deg]"></div>
    </div>
  )
}

export default SnakeGame