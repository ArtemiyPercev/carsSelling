import description1 from '../../images/description1.png'
import description2 from '../../images/description2.png'
import description3 from '../../images/description3.png'

const Description = () => {
  return (
    <div className="flex flex-col ml-36">
      {/* 1 */}
      <div className="flex flex-row mb-32 items-center	">
        <div className="w-9/12">
          <img src={description1} alt="car" />
        </div>
        <div className="w-4/6	">
          <h2 className="text-5xl	font-medium mb-10 w-5/6	">
            Аренда напрямую от владельцев
          </h2>
          <div>
            <p className="w-4/5	font-normal	text-xl	">
              Вы получите автомобиль от его собственника, а мы проверим
              юридическую чистоту и техническую исправность.
            </p>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="flex flex-row mb-32 items-center	">
        <div className="w-4/6	">
          <h2 className="text-5xl	font-medium	mb-10 w-5/6	">
            Автомобили на любой вкус
          </h2>
          <div>
            <p className="w-4/5	font-normal	text-xl	">
              Вы всегда можете подобрать автомобиль любого класса от бюджетных
              моделей до премиум-класса и спорткаров.
            </p>
          </div>
        </div>
        <div className="w-9/12">
          <img src={description2} alt="cars" />
        </div>
      </div>
      {/* 3 */}
      <div className="flex flex-row mb-32 items-center	">
        <div className="w-9/12		">
          <img src={description3} alt="structure" />
        </div>
        <div className="w-4/6	">
          <h2 className="text-5xl	font-medium		mb-10 w-8/12	">
            Гарантия честной аренды
          </h2>
          <div>
            <p className="w-4/5	font-normal	text-xl	">
              Общение и оплата происходит через наш сервис, что предотвращает
              вас от обмана.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
