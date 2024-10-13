import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate

export default function Aside({ onCategoryChange }) {
    const [activeCategory, setActiveCategory] = useState("Todo");
    const navigate = useNavigate(); // Inicializar useNavigate

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        onCategoryChange(category); // Llamar a la función de cambio de categoría
        navigate("/"); // Redirigir a la ruta raíz
    };

    const categories = ["Todo", "Arroces", "Pastas", "Ensaladas", "Sopas", "Postres"];
  
    return (
      <div className="sticky col-sm-4">
        <h2>Categorías</h2>
        <ul className="nav nav-pills flex-column">
          {categories.map((category) => (
            <li className="nav-item" key={category}>
              <button
                className={`nav-link ${activeCategory === category ? "active" : ""}`}
                onClick={() => handleCategoryClick(category)} // Llamar a la función modificada
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
        <hr className="d-sm-none" />
      </div>
    );
}
