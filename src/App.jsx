import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Layout from "./Layouts/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/dentista/:id" element={<Detail />} />
          <Route path="*" element={<h1>Error 404 - Page not Found</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
