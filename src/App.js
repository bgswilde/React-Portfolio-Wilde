import React, { useState } from "react";
import Nav from "./components/Nav";

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

      </main>
    </div>
  );
}

export default App;
