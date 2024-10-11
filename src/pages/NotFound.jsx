import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
        <div className="col-sn-8">
        <h1 className="text-center mt-52">Lo sentimos la página no existe</h1>
        <div className="text-center my-3">
            <Link className="btn btn-success" to="/"> Ir a Home</Link>
        </div>
        </div>
    </>
  )
}

export default NotFound