import Navbar from "./component/Navbar/Navbar";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./component/pages/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" exact element={<About />} />
          <Route path="/services" exact element={<Services />} />
        </Routes>
        {/* <Main/>
      <Section/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
