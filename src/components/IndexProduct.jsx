import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const endpoin = "http://laravel9.test/api";

export function IndexProduct() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [products, setProducts] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getAllProduct();
  }, []);

  const getAllProduct = async () => {
    const response = await axios.get(`${endpoin}/products`);
    setProducts(response.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${endpoin}/product/${id}`);
    getAllProduct();
  };

  return (
    <div className="container">
      <div className="d-grid gap-2">
        <h2> List Products</h2>
        <Link to="/create" className="btn btn-success btn-lg mt-2 mb-2 text-white">
          Create
        </Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">description</th>
            <th scope="col">price</th>
            <th scope="col">stock</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <th scope="row">{product.description}</th>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td colSpan="2">
                <Link to={`/edit/${product.id}`} className="btn btn-warning m-2">
                  Editar
                </Link>
                <button
                  className="btn btn-danger "
                  onClick={() => deleteProduct(product.id)}
                >
                  eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
<table class="table table-dark table-striped">...</table>;
