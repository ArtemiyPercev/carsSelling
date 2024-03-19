import Header from '../header/Header'
import Footer from '../footer/Footer'
import faqimage from '../../images/faqimage.png'
import Accordion from '../../assets/Accordion'

const Faq = () => {
  return (
    <div>
      <Header />
      {/* pochemu nelzia zadat classnam componentu */}
      <div className="mt-[150px]">
        <img
          src={faqimage}
          alt="questions"
          className="block m-auto w-[360px] h-[300px] mb-[60px]"
        />
        <h1 className="text-center block font-bold text-[64px] leading-[76.8px] mb-[30px]">
          Частые вопросы
        </h1>
        <p className="text-center block text-[24px] leading-[36px]">
          Отвечаем на вопросы, которые у вас могут возникнуть.
        </p>
      </div>
      <Accordion />
      <Footer />
    </div>
  )
}

export default Faq
