import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Link, Routes, Route, useLocation, useParams } from 'react-router-dom';
import Home from './pages/Home';
import React from 'react';
import Publications from './pages/Publications';
import Photos from './pages/Photos';
import Contacts from './pages/Contacts';
import ShowContact from './pages/ShowContact';
import { contacts } from './assets/data';

function App() {
  const [active, setActive] = React.useState(0);
  const pages = ['Home', 'Publications', 'Photos', 'Contacts'];

  const handlePage = (value) => {
    setActive(value);
  };
  React.useEffect(() => {
    const path = window.location.pathname.replace('/', '');
    console.log(path);
    if (!path) {
      return;
    }
    let activeCategory = path[0].toUpperCase() + path.slice(1);
    if (pages.indexOf(activeCategory) === -1) {
      activeCategory = activeCategory.substring(0, activeCategory.indexOf('/'));
    }
    setActive(pages.indexOf(activeCategory));
  }, []);

  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <nav className="navigation">
            {pages.map((e, i) => (
              <Link
                onClick={() => handlePage(i)}
                key={e}
                className={active === i ? 'active' : ''}
                to={e.toLowerCase() === 'home' ? '/' : e.toLowerCase()}>
                {e}
              </Link>
            ))}
          </nav>
          <div className="main">
            <div className="container">
              <Routes>
                <Route path="" element={<Home />} />
                <Route path="publications" element={<Publications />} />
                <Route path="photos" element={<Photos />} />
                <Route path="contacts">
                  <Route index element={<Contacts contacts={contacts} />} />
                  <Route path=":test" element={<ShowContact contacts={contacts} />} />
                </Route>
              </Routes>
            </div>
          </div>
          <div className="footer">All rights reserved</div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
