import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar.tsx'
import Home from '../pages/home/Home.tsx'
import TokenInfo from '../pages/tokenInfo/TokenInfo.tsx'

function App() {
    return (
        <div className="min-h-screen w-full flex flex-col">
            <Router>
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/tokeninfo" element={<TokenInfo />} />
                    </Routes>
                </main>
            </Router>
        </div>
    )
}

export default App
