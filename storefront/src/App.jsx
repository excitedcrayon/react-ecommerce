import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import ProductDescription from "./pages/ProductDescription";
import PageNotFound from "./pages/PageNotFound";

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/search/:param' element={ <Search/> } />
        <Route path='/category' element={ <Category /> } />
        <Route path='/checkout' element={ <Checkout /> } />
        <Route path='/order-confirmation' element={ <OrderConfirmation /> } />
        <Route path='/product-description/:product' element={ <ProductDescription /> } />
        <Route path='*' element={ <PageNotFound /> } />
      </Routes>
    </Router>
  )
}

export default App
