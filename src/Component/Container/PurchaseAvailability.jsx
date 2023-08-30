// import React, { useState } from 'react';
// import './PurchaseAvailability.css'; // Make sure to import your CSS file
// import {FaTimes} from 'react-icons/fa'
// const PurchaseAvailability = () => {
//   const [options, setOptions] = useState({
//     option1: false,
//     option2: false,
//     option3: false,
//   });

//   const optionLabels = {
//     option1: 'Online Store',
//     option2: 'Point of Sale',
//     option3: 'Buy Button',
//   };

//   const handleOptionChange = (option) => {
//     setOptions((prevOptions) => ({
//       ...prevOptions,
//       [option]: !prevOptions[option],
//     }));
//   };

//   const clearOptions = () => {
//     setOptions({
//       option1: false,
//       option2: false,
//       option3: false,
//     });
//   };

//   const selectedOptions = Object.keys(options).filter((option) => options[option]);

//   return (
//     <div className="purchase-availability">
      
//       <div className="dropdownns">
//         <div className="dropdown-headers">
//           <span className='p'>Purchase Availability</span>
         
//           </div>
//         <div className="dropdown-contents">
          
//           <label>
//             <input
//               type="checkbox"
//               checked={options.option1}
//               onChange={() => handleOptionChange('option1')}
//             />
//              Online Store
//           </label>
//           <br />
//           <label>
//             <input
//               type="checkbox"
//               checked={options.option2}
//               onChange={() => handleOptionChange('option2')}
//             />
//              Point of Sale
//           </label>
//           <br />
//           <label>
//             <input
//               type="checkbox"
//               checked={options.option3}
//               onChange={() => handleOptionChange('option3')}
//             />
//            Buy Button
//           </label>
//           <br/>
//           <label>
//                 <input
//                   type="checkbox"
//                   checked={false}
//                   onChange={clearOptions}
//                 />
//                 Clear
//               </label>
//         </div>
        
//       </div>
      
//       <div className='options'>
//       {selectedOptions.length > 0 && (
//       <div className="selected-options">
//         <ul>

//   {selectedOptions.map((option, index) => (
//     <li className={index !== 0 && 'comma'} key={option}>
//       {index !== 0 && ', '}
//       {optionLabels[option]}
//     </li>
//   ))}
//     <FaTimes/>

// </ul>

       
//       </div>
//     )}
    
//     </div>
    
//     </div>
    
//   );
// };

// export default PurchaseAvailability;



import React  , {useState}from 'react'
import './PurchaseAvailability.css';

function PurchaseAvailability() {
    const options =[ 
      {
        optionName : "sample1",
        state: false
      },
      {
        optionName : "sample2",
        state: false
      },
      {
        optionName : "sample3",
        state: false
      },
    ];

    const [filter , setfilter] = useState([""]);
  
  const handleOptionChange =  (opt) => {
    options[opt].state = !options[opt].state;
    console.log(options[opt]);
    if(options[opt].state == true){
      setfilter(options[opt].optionName);
    }
    console.log(filter);

  }

  const clearOptions = () =>{

  }
  
  return (
        <div className="purchase-availability">
     
          <div className="dropdownns">
            <div className="dropdown-headers">
              <span className='p'>Purchase Availability</span>
        
              </div>
            
<div className="dropdown-contents">
  {options.map((option , i) =>(
      <label key={i}>
                <input
                     type="checkbox"
                     onChange={() => handleOptionChange(i)}
                   />
                  {option.optionName}
                 </label>
                 
  ))
  }
              
       </div>
          </div>
     
          <div className='options'>

        
         </div>
        
         </div>
        
       );
}

export default PurchaseAvailability
