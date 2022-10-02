import React, { useState } from 'react'


// product state component
const ProductsList = ({product , stock}) =>{
    const [count, setCount] = useState(0);
  
    const increment = () =>{
      if(count <= stock){ // hote pare 20 or 25 or 30 
        setCount(count + 1)
      }
    }
  
    const decrement = () =>{
      if(count > 0){
        setCount(count - 1);
      }
    }
  
    return (
      <div>
          <div>
            <h1>Our Product: {product}</h1>
            <h2>Count: {count} / {stock} </h2>
            <button onClick={increment} disabled={count===stock}>Increment</button>
            <button onClick={decrement} disabled={count=== 0}>Decrement</button>
          <div>
            {count >= 5 && <p>I am count.</p>}
            {
               (count >= 10  && count <= 15 ) ? <p> useState.</p> : <h3>Hello state</h3>
            }
          </div>
        </div>     
      </div>
    )
  }
  
const App = () => {
  return (
    <div>
       <ProductsList product={"Keyboard"} stock={30}/>  <br />
       <ProductsList product={"Mouse"} stock={20}/>
       <ProductsList product={"Headphone"} stock={0}/>
       <ProductsList product={"phone"} stock={5}/> 
    </div>
  )
}

export default App