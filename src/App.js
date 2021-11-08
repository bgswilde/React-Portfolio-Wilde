import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";


function App() {
  const [pages] = useState([
    { title: 'about' },
    { title: 'portfolio' },
    { title: 'resume' },
    { title: 'contact' }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
      <div className="app">
        <Nav 
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Nav>
        <main>
          <div className="container">
            {currentPage.title === 'about' && <About />}
            {currentPage.title === 'portfolio' && <Portfolio />}
          </div>
        </main>
        <Footer />
      </div>
  );
}

export default App;
