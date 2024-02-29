import facebook from '../../svg/facebook.png'
import instagram from '../../svg/instagram.png'
import vkontakte from '../../svg/vkontakte.png'

const Footer = () => {
  return (
    <>
      <footer className="flex justify-between items-center w-full h-[124px] bg-[#3F3D56]">
        <h6 className="text-slate-300 text-[16px] leading-[18.75px] ml-[32px]">
          © SkillDrive Inc. 2020
        </h6>
        <div className="flex gap-5 mr-[32px]">
          <img
            className="w-[32px] h-[32px] cursor-pointer"
            src={vkontakte}
            alt="VK"
          />
          <img
            className="w-[32px] h-[32px] cursor-pointer"
            src={instagram}
            alt="Instagram"
          />
          <img
            className="w-[32px] h-[32px] cursor-pointer"
            src={facebook}
            alt="Facebook"
          />
        </div>
      </footer>
    </>
  )
}

export default Footer
