import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Main from './components/Main.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import NotFound from "./components/NotFound.jsx";

import './scss/App.scss';

function App() {
    return(
        <Router>
            <Routes>
                <Route path={'/'} element={<Main />} ></Route>
                <Route path={'/signup'} element={<SignUp />} ></Route>
                <Route path={'/signin'} element={<SignIn />} ></Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
