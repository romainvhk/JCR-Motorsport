import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavbarComponent from './components/NavbarComponent';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

function Router() {
  const [isLogged, setIsLogged] = useState(false);


  const notify = (text, type) => toast(text, { 
    position: "top-right", 
    autoClose: 5000, 
    hideProgressBar: false, 
    closeOnClick: true, 
    pauseOnHover: true, 
    draggable: false, 
    progress: undefined,
    type: type || "info"
  });

  return (
    <BrowserRouter>
      <NavbarComponent isLogged={isLogged} setIsLogged={setIsLogged} />
      <Routes>
        <Route path="/" element={<HomePage isLogged={isLogged} />} />
        {/* {
          isLogged ?
            // <Route path="/profile" element={<ProfilePage />} />
            :
            <>
              <Route path="/signup" element={<SignupPage notify={notify} />} />
              <Route path="/signin" element={<SigninPage setIsLogged={setIsLogged} />} />
            </>
        } */}

        {/* <Route path="/post/:id" element={<PostPage />} /> */}

      </Routes>

      <ToastContainer />
    </BrowserRouter>
  );
}

export default Router;