import {useEffect} from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter,useNavigator} from "react-router-dom";

function App() {
   const v=useNavigate();
   useEffect(()=>{
v('/')
      
   },[])
   return (
      <div>
         <BrowserRouter>
            <BaseLayout/>
         </BrowserRouter>
      </div>
   );
}


export default App;
