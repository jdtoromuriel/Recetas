import { Link } from "react-router-dom";

export default function Article({ receta, id }) {
    return (
        <>
            <h2>{receta.titulo}</h2>
            <h5>{receta.subtitulo}</h5>
            <div className="fakeimg">
                <img src={receta.imagenes[0]} className="img-fluid" alt={receta.titulo} />
            </div>
            <p>{receta.texto}</p>
            <Link to={`/Recipe/${id}`} className="btn btn-primary">Leer receta</Link>
        </>
    );
}
