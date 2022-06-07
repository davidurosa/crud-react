import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoin = "http://laravel9.test/api/product/";

export function EditProduct() {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoin}${id}`, {
      description: description,
      price: price,
      stock: stock,
    });
    navigate("/");
  };

  useEffect(() => {
    const getProductById = async () => {
      const response = await axios.get(`${endpoin}${id}`);
      setDescription(response.data.description);
      setPrice(response.data.price);
      setStock(response.data.stock);
    };

    getProductById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <h3>Create Product</h3>
      <form onSubmit={update}>
        <div className="mb-3">
          <label className="form-label">Descripcion:</label>
          <input
            type="text"
            className="form-control"
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price:</label>
          <input
            type="number"
            className="form-control"

            value={price}
            required
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">stock:</label>
          <input
            type="number"
            className="form-control"
            value={stock}
            required
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          update
        </button>
      </form>
    </div>
  );
}
