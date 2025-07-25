import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import AboutUs from './pages/aboutUs/AboutUs.tsx'
import Home from './pages/home/Home.tsx'
import TokenPage from './pages/tokenInfo/TokenPage.tsx'
import Footer from './components/Footer.tsx';

function App() {
    return (
        <div className="bg-image min-h-screen flex flex-col bg-no-repeat bg-cover bg-center">

        <Router>
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/tokeninfo" element={<TokenPage />} />
                        <Route path="/aboutus" element={<AboutUs />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </div>
    );
}

export default App