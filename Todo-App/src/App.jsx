import Child from "./Child"


function App() {
 

  return (
    <>
    <div className="container">
      <div className="input">
        <h1>
          To-Do List <span></span>
        </h1>
        <div className="main_input">
          <input type="text"  />
          <button> Add</button>
        </div>
      </div>
      <div className="display">
        <Child/>

      </div>
      <div className="counter">
        <h1></h1>
        <div className="btn">
          <button>Increment</button>
          <button >Decrement</button>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default App
