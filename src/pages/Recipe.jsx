import { useParams } from 'react-router-dom';
import { infoContext } from '../components/recipeprovider/ReciperProvider';
import { useContext, useState } from 'react';
import Aside from '../components/aside/aside'; 
import Content from '../components/content/content';

const Recipe = () => {
  let { id } = useParams();
  let { infoRecipes } = useContext(infoContext);
  let { titulo, subtitulo, texto, imagenes, ingredientes, elaboracion, titulo2, titulo3 } = infoRecipes[id];

  const [selectedCategory, setSelectedCategory] = useState("Todo");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
let hiddenContent = true;
  return (
    <div className="row">
      <Aside onCategoryChange={handleCategoryChange} />
      <div className="col-sm-8">
        <h1>{titulo}</h1>
        <div className="img-receta">
          <img src={imagenes[1]} alt="" />
        </div>
        <h2>{subtitulo}</h2>
        <p>{texto}</p>
        <h3>{titulo2}</h3>
        <ul>
          {ingredientes.map((ingre, index) => (
            <li key={index}>{ingre}</li>
          ))}
        </ul>
        <div className="img-receta">
          <img src={imagenes[1]} alt="" />
        </div>
        <h3>{titulo3}</h3>
        <ul>
          {elaboracion.map((ingre, index) => (
            <li key={index}>{ingre}</li>
          ))}
        </ul>
      </div>
          {!hiddenContent && <Content selectedCategory={selectedCategory} />}
    </div>
  );
};

export default Recipe;
