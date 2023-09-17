import Body from './sections/Body'
import Header from './sections/Header'
import Tags from './sections/Tags'
import Titles from './sections/Titles'

const App = () => {
  return (
    <div className='lg:w-6/12 w-9/12 mt-[300px] rounded-[40px] p-10 mx-auto border border-stone-950' >
      <Header />
      <Titles />
      <Body />
      <Tags />
    </div>
  )
}

export default App
