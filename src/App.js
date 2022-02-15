import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';

import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';

function App() {
  const [isAuth, setIsAuth] = useState(false)


  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    })
  }
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>

        {!isAuth ? (<Link to="/login">Login</Link>
        ) : (
          <>
            <Link to="/create-post">Create Post</Link>
            <button onClick={signUserOut}>Log out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/create-post" element={<CreatePost isAuth={isAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
