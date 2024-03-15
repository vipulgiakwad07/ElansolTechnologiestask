import { ReactDOM } from 'react';
import './App.css';

// importing components from react-router-dom package
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Login from './Login';
import Registration from './Registration';

function App() {
  
  return (
    <div className="App"> 
            <Router>
                <Routes> 
                    <Route exact path="/" element={<Login />} />
                    {/* <Route path="/about" element={<About />}  /> */}
                    <Route path="/Registration" element={<Registration />} />
                    <Route path="/Login" element={<Login />} />
                </Routes>

            </Router>
    </div>
  );
}

export default App;
