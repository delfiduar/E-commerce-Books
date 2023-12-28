import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import CartContent from './Components/CartContent/CartContent';
import DataProvier from './Components/Context/DataContext';

function App() {
  return (
    <DataProvier>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<CartContent/>}></Route>
        </Routes>
      </BrowserRouter>
    </DataProvier>
  );
}

export default App;
