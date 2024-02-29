import Circle from '../../assets/circle'

const StepsTwo = () => {
  return (
    <div className="w-full">
      <div className=" p-64 w-full relative">
        <h2 className="text-6xl	font-normal	mb-8 text-center ">
          У вас есть автомобиль?
        </h2>
        <div className="text-center mb-[50px] text-[33px] font-normal	">
          <p>Чтобы он не простаивал — сдавайте его в аренду и зарабатывайте.</p>
        </div>
        <div className=" flex justify-around w-full">
          <Circle number="1" />
          <Circle number="2" />
          <Circle number="3" />
          <Circle number="4" />
        </div>
        <div className="border-dashed	border-gray-400	border absolute inset-y-[62%] inset-x-[24%]	z-0	w-max-[1100px]	"></div>
      </div>
    </div>
  )
}

export default StepsTwo
