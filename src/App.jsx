import NavBar from './components/navBar'
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Projects from './Pages/projects';
import Home from "./Pages/homePage";
import CadastroProject from "./Pages/Projects/CadastroProject"
import AlgoProject from "./Pages/Projects/AlgoProject"
import ContactPage from "./Pages/ContactPage"

function App() {
    return (
        <>
            <Router>
                <NavBar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/Projects' element={<Projects />} />
                    <Route path='/CadastroProject' element={<CadastroProject />} />
                    <Route path='/AlgoProject' element={<AlgoProject />} />
                    <Route path='/contactPage' element={<ContactPage />} />
                </Routes>
            </Router>
        </>
    )
}

export default App;