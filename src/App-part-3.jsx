import { useState } from "react";


// product 
const productItem = [
  {
    id:1,
    name: 'Keyboard',
    stock: 10,
    price: 2000
  },
  {
    id:2,
    name: 'Mouse',
    stock: 15,
    price: 200
  },
  {
    id:3,
    name: 'Headphone',
    stock: 5,
    price: 1200
  },
 ]


const TableRow = ({id, name, stock, price, quantity, total, increment, decrement}) =>{
  return (
      <tr>
            <td>{id} </td>
            <td>{name} </td>
            <td>{stock} </td>
            <td>{price} </td>
            <td>{quantity} </td>
            <td>{total} </td>
            <td>
              <button onClick={()=>increment(id)} disabled={quantity === stock}>+</button>
              <button onClick={decrement} disabled={quantity === 0}>-</button>
            </td>
      </tr>
  )
 }

  
const App = () => {
    const [products, setProducts] = useState(productItem.map((item)=>({
        ...item,
        quantity: 0,
        total: 0
       })
     ));


     const incrementItem = (id) =>{
        const newProduct = products.map((product)=>{ 
          if(id === product.id && product.stock > product.quantity ){
             product.quantity ++
             product.total = product.price * product.quantity
          }
          return product
        })    
        setProducts(newProduct) ;
      }
     
      const decrementItem = (id) =>{
       const newProduct = products.map((product)=>{ 
         if(id === product.id && product.quantity > 0){
            product.quantity --
            product.total = product.total - product.price
         }
         return product
       })    
       setProducts(newProduct) ;
      }
     
      // total
      const total = products.reduce((acc, curr)=> acc + curr.total, 0)


  return (
    <>
               {/* product */}
     <div>
      <h1>Product List</h1>
      <table>
        <thead>
          {/* <TableRow /> */}
          <tr>
            <th>ID </th>
            <th>ProductName </th>
            <th>Stock </th>
            <th>Price </th>

            <th>User-Quantity </th>
            <th>Total </th>
            <th>Action </th>
      </tr>
        </thead>

        <tbody>
          {
            products.map((product)=> (
              <TableRow {...product} 
              decrement={()=>decrementItem(product.id)} 
              increment= {incrementItem} />
            )) 
          }
        </tbody>
      </table>
      <div>
            {
              total > 0 && <h2>Total: {total}</h2>
             }
      </div>
     </div>

     <hr />
  


    </>
  )
}

export default App