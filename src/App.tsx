import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Home from './pages/home/Home.tsx'
import TokenInfo from './pages/tokenInfo/TokenInfo.tsx'

function App() {
    return (
        <div className="min-h-screen bg-slate-50">
            <Router>
                <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/tokeninfo" element={<TokenInfo />} />
                    </Routes>
            </Router>
        </div>
    )
}

export default App
