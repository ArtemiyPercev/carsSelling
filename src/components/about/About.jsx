import about from '../../images/about.png'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import artiom from '../../images/teamPhotos/Artiom.png'

const About = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center p-64 w-full">
        <div className="mb-10">
          <img src={about} alt="About us " />
        </div>
        <h1 className="text-6xl font-bold mb-10">О нас</h1>
        <div className="w-[925px] h-[105px]">
          <p className="text-center text-[24px]	">
            Это учебный проект, созданный с целью получения боевого опыта в
            разработке настоящего живого веб-приложения. Этот сервис имитирует
            работу каршеринга, в котором можно не только арендовать автомобили,
            но и сдавать их в аренду.
          </p>
        </div>
      </div>
      <div className="bg-slate-200 p-40 w-full">
        <h2 className="text-center mb-10 text-[48px] font-medium	">Контакты</h2>
        <div className="flex justify-center">
          <div className="text-center mr-[240px]">
            <p className="text-[14px] text-[#4F4F4F]">Электронная почта</p>
            <a className="text-[20px]" href="mailto:drive@skillfactory.com">
              drive@skillfactory.com
            </a>
          </div>
          <div className="w-[1px] h-[50px] bg-slate-400	mr-[279px]	"></div>
          <div className="text-center">
            <p className="text-[14px] text-[#4F4F4F]">Телефон</p>
            <tel className="text-[20px]">+7 912 123-45-67</tel>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-72 w-full">
        <h2 className=" mb-20 text-[48px] font-medium	">Команда</h2>
        <div className="flex flex-row flex-wrap gap-x-[80px] gap-y-[80px]  justify-center items-center w-[980px]">
          {/* 1 */}
          <div className="text-center">
            <img
              src={artiom}
              alt="Artiom"
              className=" rounded-[50%] h-[180px] w-[180px]"
            />
            <h4 className="text-[20px] font-medium my-4	">Artiom Percev</h4>
            <p className="text-[14px] text-[#4F4F4F]">CEO</p>
          </div>
          {/* 2 */}
          <div className="text-center">
            <img
              src={artiom}
              alt="Artiom"
              className=" rounded-[50%] h-[180px] w-[180px]"
            />
            <h4 className="text-[20px] font-medium my-4">Иван Иванов</h4>
            <p className="text-[14px] text-[#4F4F4F]">SMM</p>
          </div>
          {/* 3 */}
          <div className="text-center">
            <img
              src={artiom}
              alt="Artiom"
              className=" rounded-[50%] h-[180px] w-[180px]"
            />
            <h4 className="text-[20px] font-medium my-4">Алексей Смирнов</h4>
            <p className="text-[14px] text-[#4F4F4F]">Frontend-разработчик</p>
          </div>
          {/* 4 */}
          <div className="text-center">
            <img
              src={artiom}
              alt="Artiom"
              className=" rounded-[50%] h-[180px] w-[180px]"
            />
            <h4 className="text-[20px] font-medium my-4">Денис Ярцев</h4>
            <p className="text-[14px] text-[#4F4F4F]">Backend-разработчик</p>
          </div>
          {/* 5 */}
          <div className="text-center">
            <img
              src={artiom}
              alt="Artiom"
              className=" rounded-[50%] h-[180px] w-[180px]"
            />
            <h4 className="text-[20px] font-medium my-4">Николай Морозов</h4>
            <p className="text-[14px] text-[#4F4F4F]">Дизайнер</p>
          </div>
          {/* 6 */}
          <div className="text-center">
            <img
              src={artiom}
              alt="Artiom"
              className=" rounded-[50%] h-[180px] w-[180px]"
            />
            <h4 className="text-[20px] font-medium my-4">Ирина Деева</h4>
            <p className="text-[14px] text-[#4F4F4F]">Копирайтер</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About
