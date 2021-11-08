import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  const [pages] = useState([
    { title: 'about' },
    { title: 'portfolio' },
    { title: 'resume' },
    { title: 'contact' }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Nav 
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Nav>
      <main>
        <div className="container">
          {currentPage.title === 'about' && <About />}
        </div>
      </main>
    </div>
  );
}

export default App;
