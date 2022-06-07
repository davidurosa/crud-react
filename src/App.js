import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CreateProduct } from './components/CreateProduct';
import { EditProduct } from './components/EditProduct';
import { IndexProduct } from './components/IndexProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexProduct/>}/>
        <Route path='/create' element={<CreateProduct/>}/>
        <Route path='/edit/:id' element={<EditProduct/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
