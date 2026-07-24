
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Getproducts from './components/Getproducts';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Addproduct from './components/Addproduct';
import Mpesapayment from './components/Mpesapayment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Videos from './components/Videos';









function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* navbar goes here  */}
      <Navbar/>

      <header className="bg-warning">
        <h3 className='text-danger text-center bg-dark '> Welcome to sokogarden</h3>

        
      </header>
      {/* navigations  */}
      <nav>
        <Link to = "/Signin" className='btn btn- me-2'> Signin</Link>
        <Link to = "/Signup" className='btn btn- me-2'> Signup</Link>
        <Link to = "/Addproduct" className='btn btn- me-2'>Addproduct</Link>
        <Link to = "/" className='btn btn- me-2'> Getproducts</Link>
        

      


      </nav>
      {/* Routes goes here  */}
      <Routes>
        <Route path='/signin' element = {<Signin/>}/>
        <Route path='/signup' element = {<Signup/>}/>
        <Route path='/Addproduct' element = {<Addproduct/>}/>
        <Route path='/' element = {<Getproducts/>}/>
        <Route path='/mpesa' element = {<Mpesapayment/>}/>
        <Route path='/Videos' element = {<Videos/>} />  

      </Routes>

      {/* footer goes here  */}
      <Footer/>
    </div>
      </BrowserRouter>
  );
}

export default App;
