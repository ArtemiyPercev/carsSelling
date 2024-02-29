import Carousel from '../../assets/Carousel'

const Feedback = () => {
  return (
    <div className="w-full">
      <div className="bg-slate-200 p-64 w-full">
        <h2 className="text-6xl	font-normal	 mb-20 text-center  ">
          Отзывы клиентов
        </h2>
        <Carousel>
          <div className=" flex center justify-center bg-slate-300	"></div>
          <div className="flex center justify-center bg-slate-400	"></div>
          <div className="flex center justify-center bg-slate-500	"></div>
        </Carousel>
      </div>
    </div>
  )
}

export default Feedback
