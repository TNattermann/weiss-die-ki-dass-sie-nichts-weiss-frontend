import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from '../pages/Home'
import TokenInfo from '../pages/TokenInfo'

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
