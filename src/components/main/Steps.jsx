import Circle from '../../assets/circle'

const Steps = () => {
  return (
    <div className="w-full">
      <div className="bg-slate-200 p-64 w-full relative">
        <h2 className="text-6xl	font-normal	 mb-20 text-center ">
          Как арендовать автомобиль
        </h2>
        <div className=" flex justify-around w-full">
          <Circle number="1" />
          <Circle number="2" />
          <Circle number="3" />
        </div>
        <div className="border-dashed	border-gray-400	border absolute inset-y-[59%] inset-x-[27%]	z-0	w-max-[600px]	"></div>
      </div>
    </div>
  )
}

export default Steps
