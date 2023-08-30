// import React,{useState} from 'react'
// import './ProductType.css'
// function ProductType() {
//   const [products, setproduct] = useState({
//     product1:false,
//     product2:false,
//     product3:false,
//   });

//   const productlabels={
//     product1:"t-Shirt",
//     product2:"Accessory",
//     product3:"GiftCard",
//   };

//   const handleproductchange=(product)=>{
//     setproduct((prevproducts)=>({
//         ...prevproducts,
//         [product]:!prevproducts[product],
//     }))
//   }

//   const clearoption=()=>{
//     setproduct({
//       product1:false,
//       product2:false,
//       product3:false,
//     });
//   };

//   const selectedproducts= Object.keys(products).filter((option)=>products[option]);

//   return (
//     <div className='producttype'>
//         <div className='prodropdown'>
//           <div className='prodheaders'>
//           <span className='pt'>Product Type</span>
//           </div>
//           <div className='prod-contents'>
//             <label>
//               <input type="checkbox" checked={products.product1}
//               onChange={()=>handleproductchange('product1')} />
//               T-shirt
//             </label>
//             <br/>
//             <label>
//               <input type="checkbox" checked={products.product2}
//               onChange={()=>handleproductchange('product2')} />
//               Accessory
//             </label>
//             <br/>
//             <label>
//               <input type="checkbox" checked={products.product3}
//               onChange={()=>handleproductchange('product3')} />
//               GiftCard
//             </label>
//             <br/>
//             <label>
//               <input type="checkbox" checked={false}
//               onChange={clearoption} />
//               Clear
//             </label>
//           </div>
//           <div className='products'>
//             {selectedproducts.length>0 && (
//               <div className='selected-products'>
//                 <ul>
//                   {selectedproducts.map((option,index)=>(
//                     <li className={index!==0 && 'comma'} key={option}>
//                           {index!==0 && ','}
//                           {productlabels[option]}
//                     </li>
//                   ))}
//                 </ul>
//                 </div>
//             )}
//           </div>
//         </div>
          
//     </div>
//   )
// }

// export default ProductType;
import React from 'react'

function ProductType() {
  return (
    <div>
      
    </div>
  )
}

export default ProductType

