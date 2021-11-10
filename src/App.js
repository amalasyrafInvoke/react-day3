import './App.css';
import Login from './containers/login';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './containers/dashboard';
import Header from './components/header';
import ProductList from './containers/productList';
import Details from './containers/dashboard/details';
import CreateProduct from './containers/createProduct';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Header />}>
            <Route index element={<Dashboard />} />
            <Route path='/create' element={<CreateProduct />}/>
            <Route path="/dashboard/:id" element={<Details />} />
            {/* <Route path='/product-list' element={<ProductList />} /> */}
          </Route>
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
