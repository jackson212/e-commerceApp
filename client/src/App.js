import './App.css';
import Footer from './component/Footer'; 
import {Container} from 'react-bootstrap'
import Header from '../src/component/Header'
import  HomeScreen from '../src/screen/HomeScreen'

import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import ProductScreen from './screen/ProductScreen';


const  App =()=> {
  return (
    <Router>


    <Header/>
    <main className='py-3'>
     
       <Container>
       <Routes> 
       <Route path='/'  element={<HomeScreen/> }/>
       <Route path='/product/:id'  element={<ProductScreen/>  }/>
    
       </Routes> 
       </Container>
  
    </main>
    
    <Footer/>

    </Router>
  );
}

export default App;
