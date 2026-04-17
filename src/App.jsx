import { ToastContainer } from 'react-toastify'
import NavBar from './components/navbar/NavBar'
import './App.css'
import Banner from './components/hero/Banner'
import Stats from './components/stats/Stats'
import Products from './components/products/Products'
import { Suspense, useState } from 'react'

const fetchData = async() => {
  const fethD = await fetch('/data.json')
  return fethD.json();
}
function App() {
const fetchProducts = fetchData();
const [addtoCart, setaddtoCart] = useState([]);
  return (
    <>
    <NavBar addtoCart={addtoCart} ></NavBar>
    <hr/>
    <Banner></Banner>
    <Stats></Stats>
    <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
      <Products fetchProducts={fetchProducts} addtoCart={addtoCart} setaddtoCart={setaddtoCart}></Products>
    </Suspense>
    <ToastContainer></ToastContainer>
    </>
  )
}

export default App
