import './App.css';
import { Routes, Route, } from "react-router-dom";
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Item from './components/Item/Item';
import MealDb from './components/MealDb/MealDb';
import MealDbDetails from './components/MealDbDetails/MealDbDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/shop' element={<Shop></Shop>} ></Route>
        <Route path='/product/:productId' element={<Item></Item>} ></Route>
        <Route path='/mealDb' element={<MealDb></MealDb>} >
          <Route path=':mealDbId' element={<MealDbDetails></MealDbDetails>} ></Route>
        </Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
