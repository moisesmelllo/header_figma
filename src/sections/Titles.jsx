import { useState } from "react"

const Titles = () => {
  const [active, setActive] = useState(null)

  const handleClick = (index) => {
    setActive(index)
  }
  
  const buttons = ['Edit', 'Delete', 'Create']

  return (
    <section className='flex md:flex-row flex-col items-center justify-between '>
      <div>
        <h2 className='sm:text-2xl font-bold capitalize'>My parameters</h2>
      </div>
      <div className='md:space-x-4 flex md:flex-row flex-col justify-center items-center sm:mt-2'>
        {buttons.map((button, index) => (
          <button 
            key={index}
            onClick={() => handleClick(index)}
            className={`border rounded-md sm:w-[80px] w-[200px] py-2 mb-2 border-gray-400
            ${index === active 
              ? 'bg-dark-blue text-white' 
              : ''}`}
          >
            {button}
          </button>
        ))}
      </div>
    </section>
  )
}

export default Titles