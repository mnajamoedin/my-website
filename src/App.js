import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebDevelopment from "./pages/WebDevelopment";
import GraphicDesign from "./pages/GraphicDesign";
import AboutMe from "./pages/AboutMe";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="WebDevelopment" element={<WebDevelopment />} />
          <Route path="GraphicDesign" element={<GraphicDesign />} />
          <Route path="AboutMe" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
