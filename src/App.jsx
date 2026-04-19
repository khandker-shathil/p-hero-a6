import { ToastContainer } from 'react-toastify'
import NavBar from './components/navbar/NavBar'
import './App.css'
import Banner from './components/hero/Banner'
import Stats from './components/stats/Stats'
import Products from './components/products/Products'
import { Suspense, useState } from 'react'
import ThreeSteps from './components/bottoms/ThreeSteps'
import Pricing from './components/bottoms/Pricing'
import Footer from './components/bottoms/Footer'

const fetchData = async() => {
  const fethD = await fetch('/data.json')
  return fethD.json();
}
function App() {
const fetchProducts = fetchData();
const [addtoCart, setaddtoCart] = useState([]);
const [filterButton, setfilterButton] = useState('products')
  return (
    <>
    <NavBar addtoCart={addtoCart} filterButton={filterButton} setfilterButton={setfilterButton} ></NavBar>
    <hr/>
    <Banner></Banner>
    <Stats></Stats>
    <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
      <Products fetchProducts={fetchProducts} addtoCart={addtoCart} setaddtoCart={setaddtoCart} filterButton={filterButton} setfilterButton={setfilterButton}></Products>
    </Suspense>
    <ThreeSteps></ThreeSteps>
    <Pricing></Pricing>
    <Footer></Footer>
    <ToastContainer></ToastContainer>
    </>
  )
}

export default App
