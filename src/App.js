// eslint-disable-next-line
import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "./styles/App.css"

function App() {
  const [currentPage, setCurrentPage] = useState("Header");

  const renderPage = () => {
    if (currentPage === "Header") {
      return <Header />;
    }
    if (currentPage === "Project") {
      return <Project />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer/>
    </div>
  );
}

export default App;

