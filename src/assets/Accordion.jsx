import { useState } from 'react'

const Accordion = () => {
  const [openId, setId] = useState(null)

  const clickHandler = (id) => {
    if (id === openId) setId(null)
    else setId(id)
  }
  const faqlist = [
    {
      q: 'Могу ли я отменить бронь?',
      a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit., libero nunc malesuada leo, a tincidunt ex nulla ac odio. Duis feugiat tellus id felis venenatis',
    },
    {
      q: 'Могу ли я вернуть деньги, если не подошёл автомобиль?',
      a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit., libero nunc malesuada leo, a tincidunt ex nulla ac odio. Duis feugiat tellus id felis venenatis',
    },
    {
      q: 'Что делать, если случилось ДТП?',
      a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit., libero nunc malesuada leo, a tincidunt ex nulla ac odio. Duis feugiat tellus id felis venenatis',
    },
    {
      q: 'Могу ли я оставить автомобиль в удобном для меня месте?',
      a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit., libero nunc malesuada leo, a tincidunt ex nulla ac odio. Duis feugiat tellus id felis venenatis',
    },
    {
      q: 'Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили.',
      a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit., libero nunc malesuada leo, a tincidunt ex nulla ac odio. Duis feugiat tellus id felis venenatis',
    },
    {
      q: 'Что делать, если собственник просит заплатить ему напрямую?',
      a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit., libero nunc malesuada leo, a tincidunt ex nulla ac odio. Duis feugiat tellus id felis venenatis',
    },
    {
      q: 'Должен ли я заправлять автомобиль?',
      a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit., libero nunc malesuada leo, a tincidunt ex nulla ac odio. Duis feugiat tellus id felis venenatis',
    },
  ]

  return (
    <div className="list-none mb-20 p-20 rounded-7 flex justify-center items-center ">
      <ul>
        {faqlist.map((faqItem, id) => {
          return (
            <li className="mb-4 rounded-7" key={id}>
              <button
                className="relative w-full p-5 md:p-16 lg:p-5 xl:p-10 bg-gray-100 border-0 rounded-7 text-left cursor-pointer text-2xl"
                onClick={() => clickHandler(id)}
              >
                {faqItem.q}
              </button>
              <div
                className={`overflow-hidden transition-height duration-300 ${
                  id === openId ? 'h-auto' : 'h-0'
                }`}
              >
                <div className="p-8 md:p-16 lg:p-8 xl:p-8 bg-white text-2xl text-gray-700">
                  {faqItem.a}
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Accordion
