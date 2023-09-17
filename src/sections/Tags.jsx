import React from 'react'

const Tags = () => {
  return (
    <section className='flex flex-col sm:flex-row mt-[50px] md:mt-0 justify-start
    items-center space-x-3'>
      <p className='border border-slate-950 p-2 rounded-xl px-4'>Name: Contains:</p>
      <button className='border p-2 rounded-xl px-4 hover:bg-black hover:text-white'>Clear filters</button>
    </section>
  )
}

export default Tags