import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {Actions,Originals} from './Urls'
import './App.css'
import  Banner from'./Components/Banner/Banner'
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return(
    <div className='App'>
    <NavBar/>
    <Banner/>
    <RowPost title='Netflix Originals' url={Originals}/>
    <RowPost title='Action' url={Actions} isSmall/>

      
    </div>
  )
    
      
  } 
   

export default App;
