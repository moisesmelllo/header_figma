import { useState } from "react"

const Header = () => {
  const [active, setActive] = useState(null)

  const handleItemClick = (index) => {
    setActive(index)
  }

  const items = ['My parameters', 'Public', 'Configurations']

  return (
    <section className="flex sm:flex-row flex-col items-center justify-center sm:justify-start mb-10 sm:space-x-4 text-dark-blue text-xl">
      {items.map((item, index) => (
        <div 
          key={index}
          onClick={() => handleItemClick(index)}
          className={`cursor-pointer ${active === index ? 'underline sm:underline-offset-[15px] sm:decoration-2' : ''} mt-2`}
        >
          {item}
        </div>
      ))}
    </section>
  )
}

export default Header
