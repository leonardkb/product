import React from 'react';
import {FaSearch} from 'react-icons/fa'
import {BrowserRouter,Routes,Route,Link}from'react-router-dom'
import './Container.css';
import Active from './Active';
import Draft from './Draft';
import Archieved from './Archived';
import PurchaseAvailability from './PurchaseAvailability';
import ProductType from './ProductType';
function Container() {
  return (
    
      <div>
        <div className='container'>
          <div className='headnav'>
            <BrowserRouter>
            <Link to='/all' className='all'>All</Link>
            <Link to='/active' className='active'>Active</Link>
            <Link to='/draft' className='draft'>Draft</Link>
            <Link to='/archieve' className='archieve'>Archieved</Link>

            <Routes>
              <Route path='/active' element={<Active/>}/>
              <Route path='/draft' element={<Draft/>}/>
              <Route path='/archieved' element={<Archieved/>}/>
            </Routes>
            </BrowserRouter>
            
          </div>
        
          <div className='border'></div>
          <div className='search'>
            <div className='input-wrapper'>
            <FaSearch id="icon"/>
          <input placeholder='filter'/>
            
          <div className='purchase'>
          <span className=''><PurchaseAvailability/></span>
          </div>
            <div className='producttype'>
            <span className=''><ProductType/></span>
            </div>

          </div>
          </div>
          <div className='border2'></div>
        </div>
      </div>
    
  );
}

export default Container;

