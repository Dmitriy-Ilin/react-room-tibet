import Blog from './components/Blog';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import MobileHeader from './components/MobileHeader';
import Popular from './components/Popular';
import Programms from './components/Programms';
import Video from './components/Video';
import './scss/main.scss';
import React, { useState } from 'react';

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`main-div ${isActive ? 'main-div--active' : ''}`}>
      <Header isActive={isActive} setIsActive={setIsActive}/>
      <main>
        <Video/>
        <Programms />
        <Popular />
        <Blog />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

export default App
