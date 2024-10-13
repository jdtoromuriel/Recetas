import Header from "./components/header/header";
import Footer from "./components/footer/footer"; 
import Menu from "./components/menu/menu";
import "./assets/estilos.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ours from "./pages/Ours";
import Contact from "./pages/Contact";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";
import NotFound from "./pages/NotFound";
import { ReciperProvider } from "./components/recipeprovider/ReciperProvider";

function App() {
  return (
    <>
    <ReciperProvider>
        <Header />
        <Menu />
        <div className="container">
          <div className="row">
            <Routes>
              <Route path="/" element={<Home/> } />
              <Route path="/Ours" element={<Ours/> } />
              <Route path="/Recipes" element={<Recipes/> } />
              <Route path="/Recipe/:id" element={<Recipe/> } />
              <Route path="/Contact" element={<Contact/> } />
              <Route path="*" element={<NotFound/>} />
            </Routes>
              
          </div>
        </div>
        <Footer />
    </ReciperProvider>
    </>
  )
}

export default App
