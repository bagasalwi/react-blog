import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Profile from './pages/Profile';
import Home from './pages/Home';
import BlogDetail from './pages/BlogDetail';

function App() {
    return (
        <div className="app">
            <div className='brand'>React blog</div>
            <nav className='nav'>
                <Link className='navitem' to='/'>Home</Link>
                <Link className='navitem' to='profile'>Profile</Link>
                <Link className='navitem' to='blog'>Blog</Link>
                <Link className='navitem' to='contact'>Contact</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="profile" element={<Profile />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:id" element={<BlogDetail />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;
