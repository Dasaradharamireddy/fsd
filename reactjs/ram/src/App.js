import './App.css';
import Home from './Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './about';
import Services from './services';
import Events from './events';
import Menu from './menu';
import Trainees from './trainees';
import Product from './product';
import Bg from './bg';
import ClickCounter from './inc';
import Hooks from './hooks';
import Hooks1 from './hooks1';
import Productinfo from './productinfo';
import Products from './newcomp';

function App(){

  return (
    <div className='App'>
     <BrowserRouter>
     <Menu />
     <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/events" element={<Events />} />
      <Route path="/trainees" element={<Trainees />} />
      <Route path="/product" element={<Product />} />
      <Route path="/bg" element={<Bg />} />
      <Route path="/inc" element={<ClickCounter />} />
      <Route path="/hooks" element={<Hooks />} />
      <Route path="/hooks1" element={<Hooks1 />} />
      <Route path="/newcomp" element={<Products />} />
      <Route path="/productinfo/:id" element={<Productinfo />} />
     </ Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
