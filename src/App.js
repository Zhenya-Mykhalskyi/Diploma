
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/Main/Main';




const App = () => {
  return (
   <div>
     <Main />
     <div>
     {/* <Routes>
        <Route path='/dialogs/*' element= {<Dialogs/>}/>
        <Route path='/profile' element={<Profile/>}/>
     </Routes> */}
     </div>
  </div>

  );
} 


export default App; 

