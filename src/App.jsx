import './App.css'
import Counter from './components/Counter'
function App() {

  return (
    <>
      <h2 className='text-center mt-5'>Counter App</h2>
     <div style={{height:"80vh"}} className="d-flex justify-content-center align-items-center w-100">
      <Counter/>
      </div>
    </>
  )
}

export default App
