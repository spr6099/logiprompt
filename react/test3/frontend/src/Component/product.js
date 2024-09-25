import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Link } from "react-router-dom";
function Product() {
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:2000/index/GetProduct")
      .then((res) => res.json())
      .then((result) => {
        // console.log("Getproduct", result);
        setData(result);
      });
  }, []);

  const FormSubmit = (e) => {
    e.preventDefault();
    let datas = {
      product: product,
      category: category,
      price: price,
      description: description,
    };

    fetch("http://localhost:2000/index/products", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datas),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log("product.js", result);
        // navigate("/");
        window.location.reload();
      });
  };

  const Delete = (id) => {
    let deleteId = {
      Delid: id,
    };
    // console.log(deleteId);
    fetch("http://localhost:2000/index/productDelete", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deleteId),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log("product.js", result);
        window.location.reload();
        // navigate("/");
      });
  };

  return (
    <>
      <div class="row">
        <div class="col-5">
          <form
            onSubmit={FormSubmit}
            class="container border border-2 border-dark mt-5"
            style={{ width: "500px", backgroundColor: "#6c784c" }}
          >
            <h3>Products</h3>
            Product:
            <input
              type="text"
              name="product"
              class="form-control border-2 border-dark"
              style={{ width: "300px" }}
              onChange={(e) => {
                setProduct(e.target.value);
              }}
            ></input>
            category
            <input
              type="text"
              name="category"
              class="form-control border-2 border-dark"
              style={{ width: "300px" }}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            ></input>
            price
            <input
              type="number"
              class="form-control border-2 border-dark"
              style={{ width: "300px" }}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            ></input>
           
            description
            <textarea
              class="form-control border-2 border-dark"
              style={{ width: "300px" }}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
            <button type="submit" class="btn btn-dark m-2 ">
              save
            </button>
          </form>
        </div>
        <div class="col-7">
          <table>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
            {data.map((items, index) => (
              <tr>
                <td>{items.product}</td>
                <td>{items.category}</td>
                <td>{items.price}</td>
                <td>{items.description}</td>
                <td>
                  <button
                    type="submit"
                    onClick={() => {
                      Delete(items._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to="/editProduct" state={{ id: items._id }}>
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default Product;
