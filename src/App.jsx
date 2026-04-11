import { ToastContainer } from 'react-toastify'
import NavBar from './components/navbar/NavBar'
import './App.css'
import Banner from './components/hero/Banner'
import Stats from './components/stats/Stats'

function App() {

  return (
    <>
    <NavBar></NavBar>
    <hr/>
    <Banner></Banner>
    <Stats></Stats>
      <ToastContainer>
      </ToastContainer>
    </>
  )
}

export default App
