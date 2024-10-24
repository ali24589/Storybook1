import './App.css'
import  Button  from './components/button/button'
import { IoMdSend } from "react-icons/io";
import Input from './components/inputs/input';

function App() {

  return (
   <>
   <Button label='Submit Now' icon={IoMdSend} iconPosition='left' />
   <Input type='color'/>
   </>
  )
}

export default App
