import Button from '../../assets/RegisterButton'
import toyWithCar from '../../images/toywithcar.png'

const TryToRegister = () => {
  return (
    <div className="w-full">
      <div className=" p-64 w-full">
        <div className="flex flex-col	items-center justify-center	gap-y-8		">
          <div>
            <img src={toyWithCar} alt="toy with car" />
          </div>
          <h2 className="text-6xl	font-normal	 mb-20 text-center ">
            Попробуйте аренду на себе
          </h2>
          <Button />
        </div>
      </div>
    </div>
  )
}

export default TryToRegister
