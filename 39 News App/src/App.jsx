import './App.css'
import Category from './component/Category'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import News from './page/News'

function App() {

  return (
    <>
      <Navbar className={'sticky top-0 z-20'} />

      <Category className="py-10 sticky top-14 z-10 bg-base-100" />

      <News className={'pb-10'} />

      <Footer />
    </>
  )
}

export default App
