import './App.css';
import { Routes, Route, } from "react-router-dom";
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Item from './components/Item/Item';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/shop' element={<Shop></Shop>} ></Route>
        <Route path='/product/:productId' element={<Item></Item>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
