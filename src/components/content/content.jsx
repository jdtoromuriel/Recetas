import { useContext, useEffect, useState } from "react";
import Article from "./article";
import recetas from "./../../assets/datos.json";
import { infoContext } from "../recipeprovider/ReciperProvider";

let { Arroces, Pastas, Postres, Sopas, Ensaladas } = recetas;
let recipesData = [
  ...Arroces,
  ...Pastas,
  ...Postres,
  ...Sopas,
  ...Ensaladas,
];

export default function Content({ selectedCategory }) {
  const { setInfoRecipes } = useContext(infoContext);

  useEffect(() => {
    setInfoRecipes(recipesData);
  });

  const [dataVisible, setDataVisible] = useState(5);

  const loadRecipes = () => {
    setDataVisible((prev) => prev + 5);
  };

  const filteredRecipes =
    selectedCategory === "Todo"
      ? recipesData
      : recetas[selectedCategory] || [];
    let recipesRandom = [...filteredRecipes, recipesData.sort(() => Math.random() - 0.5)];

  return (  
    <div className="col-sm-8">
      {recipesRandom.slice(0, dataVisible).map((receta, i) => (
        <Article key={i} id={i} receta={receta} />
      ))}

      {dataVisible < filteredRecipes.length && (
        <button className="btn btn-success" onClick={loadRecipes}>
          Cargar más
        </button>
      )}
    </div>
  );
}
