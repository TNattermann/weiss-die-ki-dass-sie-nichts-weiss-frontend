import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Home from './pages/home/Home.tsx'
import TokenInfo from './pages/tokenInfo/TokenInfo.tsx'
import Footer from './components/Footer.tsx';

function App() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Router>
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/tokeninfo" element={<TokenInfo />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </div>
    );
}

export default App
