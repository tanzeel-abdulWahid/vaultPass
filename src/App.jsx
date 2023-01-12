import './App.css'
import HomePage from './components/HomePage'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='bg-hero-image w-full bg-cover bg-center'>
      <section  className="flex">

        <Sidebar />

        <HomePage />
      
      </section>
    </div>
  )
}

export default App
