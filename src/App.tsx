import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import AboutUs from './pages/aboutUs/AboutUs.tsx'
import Home from './pages/home/Home.tsx'
import TokenInfo from './pages/tokenInfo/TokenInfo.tsx'
import Footer from './components/Footer.tsx';
import bgImage from './assets/bg-gradient.png';

function App() {
    return (
        <div
            className="min-h-screen flex flex-col bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
        <Router>
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/tokeninfo" element={<TokenInfo />} />
                        <Route path="/aboutus" element={<AboutUs />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </div>
    );
}

export default App