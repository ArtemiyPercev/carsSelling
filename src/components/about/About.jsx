import about from '../../images/about.png'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const About = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center	 p-64 w-full">
        <div className="w-9/12">
          <img src={about} alt="About us " />
        </div>
        <h1 className="text-6xl font-bold mb-10">О нас</h1>
        <div>
          <p>
            Это учебный проект, созданный с целью получения боевого опыта в
            разработке настоящего живого веб-приложения. Этот сервис имитирует
            работу каршеринга, в котором можно не только арендовать автомобили,
            но и сдавать их в аренду.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
