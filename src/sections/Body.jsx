import { CiSettings } from "react-icons/ci";

const icon = () => {
  return (
    <span class="material-symbols-outlined">
      search
    </span>
  )
}

const Body = () => {
  return (
    <section className="flex md:flex-row flex-col justify-between items-center h-16  sm:space-y-0 mt-[50px]">
      <input 
        type="text"
        placeholder='Search'
        className='border rounded-lg w-9/12 p-2'  
      />
      <p>{'< 1 >'}</p>
      <p><CiSettings /></p>
    </section>
  )
}

export default Body