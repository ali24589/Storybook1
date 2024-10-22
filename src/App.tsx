import './App.css'
import  Button  from './components/button/button'
import { IoMdSend } from "react-icons/io";

function App() {

  return (
   <>
   <Button label='Submit Now' icon={IoMdSend} iconPosition='left' />
   </>
  )
}

export default App
