import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Main from './components/Main.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';

import './App.scss';

function App() {
    return(
        <Router>
            <Routes>
                <Route path={'/'} element={<Main />} ></Route>
                <Route path={'/signin'} element={<SignIn />} ></Route>
                <Route path={'/signup'} element={<SignUp />} ></Route>
            </Routes>
        </Router>
    )

}

export default App;
