const Circle = ({ icon, number, alt }) => {
  return (
    <div className="bg-teal-600 w-24 h-24 rounded-full p-8 relative z-[1]">
      <span className=" inline-block  align-bottom	text-white	text-5xl font-bold absolute top-[25%]">
        {icon ? <img src={icon} alt={alt} /> : number}
      </span>
    </div>
  )
}

export default Circle

// question to Karolis, why I can not put number on center with 50%, insted of I have to write top-25%
