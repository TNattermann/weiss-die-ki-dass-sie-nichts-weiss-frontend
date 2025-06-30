import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="sticky top-0 w-full bg-stone-100 text-white px-8 py-4 flex gap-8 shadow-md">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/tokeninfo" className="hover:underline">Token-Info</Link>
        </nav>
    )
}

export default Navbar