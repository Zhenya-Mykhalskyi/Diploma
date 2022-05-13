
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/Main/Main';
import Applicant from './components/Applicant/Applicant';
import Student from './components/Student/Student';


const App = () => {
  return (
   <div>
     <Main />
     
     <Routes>
        <Route path='/applicant/' element= {<Applicant/>}/>
        <Route path='/student/' element={<Student/>}/>
     </Routes>
     
  </div>

  );
} 


export default App; 

