import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import AllArticle from "./pages/Article/AllArticle";
import DetailArticle from "./pages/Article/DetailArticle";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-articles" element={<AllArticle />} />
          <Route path="/article/:id" component={<DetailArticle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
