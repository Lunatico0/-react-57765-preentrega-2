import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import Header from './components/header/Header';
import Carrito from './components/Carrito';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';
import Footer from './components/footer/Footer';
import Carrusel from './components/Carrusel';
import CheckOut from './components/CheckOut';
import CargarProductos from './components/CargarProductos';

function App() {
  return (
    <CartProvider >
      <BrowserRouter>
        <div className="generalCont">
          <div className="marmolSuperior"></div>
          <div className="container">
            <div className="contenido">
              <ToastContainer 
              theme="dark"
              stacked 
              autoClose={3000}
              position="bottom-right"
              />
              <Header />
              <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/productos' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
                <Route path='/carrito' element={<Carrito />} />
                <Route path='/finalizar-compra' element={<CheckOut />} />
                <Route path='/cargar-productos' element={<CargarProductos />} />
                <Route path='/carrusel' element={<Carrusel />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
