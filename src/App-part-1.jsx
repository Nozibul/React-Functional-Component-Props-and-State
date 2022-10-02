
// React Functional Component, Props and State 
// Any function that return a jsx is a function component in react.

const arr= [
  {
    id:1,
    text:"Title-1",
    checked: true
  },
  {
    id:2,
    text:"Title-2",
    checked: false
  },
  {
    id:3,
    text:"Title-3",
    checked: true
  },
  {
    id:4,
    text:"Title-4",
    checked: false
  },
  {
    id:5,
    text:"Title-5",
    checked: true
  },
]


// listItem component
const ListItem = ({title, checked, children}) => {
  return (
    <li style={{listStyleType: 'none', display:'flex', alignItems: 'center'}}>
      <input type="checkbox" checked={checked}/>
      <p>
        {title}
        <span>{children}</span>
      </p>
      
    </li>
  )
}


const App = () => {

  return (
    <>
  
     {/* listItem component */}
       {<ul>
           <ListItem title="-hello title" checked /> 
           <ListItem title="I am different"/> <hr />

          {/* {listArray} */}
          {
            arr.map((item)=> (
               <ListItem key={item.id} title={item.text} checked={item.checked} >
                 <button>Edit Children props</button>
                  I am children
               </ListItem>
              ))
          }
      
       </ul>}
    </>
  )
}

export default App;