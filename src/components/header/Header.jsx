import logo from './logo/SkillDrive.png'

const Header = () => {
  return (
    <header className="flex justify-between p-5 relative z-1 w-11/12">
      <div>
        <img src={logo} alt="SkillDrive" className="w-28 h-7" />
      </div>
      <nav className="flex 	">
        <ul className="flex flex-row ">
          <li className="p-4	">
            <a href="#">О нас</a>
          </li>
          <li className=" p-4	">
            <a href="#">Условия</a>
          </li>
          <li className="p-4  mr-8">
            <a href="#">Частые вопросы</a>
          </li>
        </ul>
        <button className="px-7 py-1 border-2	rounded">Войти</button>
      </nav>
    </header>
  )
}

export default Header
