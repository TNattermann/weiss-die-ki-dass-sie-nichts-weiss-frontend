import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import AboutUs from './pages/aboutUs/AboutUs.tsx'
import Home from './pages/home/Home.tsx'
import TokenPage from './pages/tokenInfo/TokenPage.tsx'
import AttentionPage from "./pages/attention/AttentionPage.tsx";
import LearningPage from "./pages/networkLearning/LearningPage.tsx";
import ModellgleichungPage from "./pages/modellgleichung/ModellgleichungPage.tsx";
import WordEmbeddingsPage from './pages/wordembeddings/WordEmbeddingsPage.tsx';
import Download from './pages/download/download.tsx';
import Impressum from './pages/impressum/impressum.tsx';
import Footer from './components/Footer.tsx';
import TemperaturePage from "./pages/Wahrscheinlichkeitstabellen/TemperaturePage.tsx";
import NewsletterPage from "./pages/newsletter/NewsletterPage.tsx";
import Wissenslist from "./pages/wissensbits/Wissenslist.tsx";
import {BitProvider} from './components/WissensContext.tsx'


function App() {
    return (
        <div className="bg-image min-h-screen flex flex-col bg-no-repeat bg-cover bg-center">

            <BitProvider>
                <Router>
                    <Navbar />
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/temperature" element={<TemperaturePage />} />
                            <Route path="/tokeninfo" element={<TokenPage />} />
                            <Route path="/networkLearning" element={<LearningPage />} />
                            <Route path="/attention" element={<AttentionPage />} />
                            <Route path="/modellgleichung" element={<ModellgleichungPage />} />
                            <Route path="/aboutus" element={<AboutUs />} />
                            <Route path='/wordembeddings' element={<WordEmbeddingsPage />} />
                            <Route path='/impressum' element={<Impressum />} />
                            <Route path='/download' element={<Download />} />
                            <Route path='/newsletter' element={<NewsletterPage />} />
                            <Route path='/wissensbits' element={<Wissenslist />} />
                        </Routes>
                    </main>
                    <Footer />
                </Router>
            </BitProvider>
        </div>
    );
}

export default App;
