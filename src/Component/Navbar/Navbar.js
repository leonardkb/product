import React  , {useState} from 'react'
import './Navbar.css'
function Navbar() {
 const [inital , setinital] = useState(false);
  return (

    
    <div className='Nav'>
       <div className='Navbar-left'>
         <span className='product-name'>Product</span>
        </div>
        <div className='Navbar-rigth'>
          <span className='btn'>Export</span>
          <span className='btn2'>Import</span>
         </div>
         <div className='dropdown'>
            <button className='dropbtn' onClick={(e)=>{setinital(!inital)}}>
              <span>MoreOption</span>
            </button>
            {inital && <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a></div>}
    
         </div>
         <button className='add'>AddProduct</button>
       </div>
      
    
  )
}

export default Navbar
