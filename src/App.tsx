import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Outlet, Route, Routes} from "react-router-dom"
import Characters from './Pages/Characters';
import Location from './Pages/Location';
import Episodes from './Pages/Episodes';
import SingleCharacter from './Pages/SingleCharacter';

function App() {
  return (
    // <>
    //   <NavBar />
    //   <Routes>
    //       <Route path='characters' > 
    //         <Route index element={<Characters />} />
    //         <Route path=':id' element={<SingleCharacter />} />

    //       </Route>
    //       <Route path='locations' element={<Location />}> </Route>
    //       <Route path='episodes' element={<Episodes />}> </Route>
    //   </Routes>

    // </>

    <>
      <NavBar />
      
      <Routes>
          <Route path='characters' 
              element={
                <>
                  <Outlet />
                < Characters />
                </>
              } 
          > 
            <Route path=':id' element={<SingleCharacter />} />
          </Route>
          
          <Route path='locations' element={<Location />}> </Route>
          <Route path='episodes' element={<Episodes />}> </Route>
      </Routes>

    </>

    

    
   

  );
}

export default App;
