import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Img from "./imgURL";

function EditProduct() {
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [preimage, setPreimage] = useState("");
  const [id, setId] = useState("");
  const [data, setData] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  let updateId = {
    id: location.state.id,
  };
  console.log("id", updateId);
  console.log("ids", id);

  useEffect(() => {
    fetch("http://localhost:2000/indexFile/getProductFile")
      .then((res) => res.json())
      .then((result) => {
        // console.log("Getproduct", result);
        setData(result);
      });

    fetch("http://localhost:2000/indexFile/productEdit", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateId),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setProduct(result.product);
        setCategory(result.category);
        setPrice(result.price);
        setDescription(result.description);
        setImage(result.image);
        setPreimage(Img+result.image)
        setId(updateId.id);
      });
  }, []);

  const FormSubmit = (e) => {
    e.preventDefault();

    let datas = new FormData();
    datas.append("product", product);
    datas.append("category", category);
    datas.append("price", price);
    datas.append("description", description);
    datas.append("image", image);
    datas.append("id", id);

    // console.log("id", id);

    fetch("http://localhost:2000/indexFile/productUpdate", {
      method: "post",
      // headers: {
      //   Accept: "application/json",
      //   "Content-Type": "application/json",
      // },
      body: datas,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("req.body", result);
        // window.location.reload();
        navigate("/productFile");
      });
  };

  return (
    <>
      <div class="row">
        <div class="col-5">
          <form
            onSubmit={FormSubmit}
            class="container border border-2 border-dark mt-5 ml-5"
            style={{ width: "500px", backgroundColor: "#6c784c" }}
          >
            <h3>Edit Products</h3>
            Product:
            <input
              value={product}
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
              value={category}
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
              value={price}
              type="number"
              class="form-control border-2 border-dark"
              style={{ width: "300px" }}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            ></input>
            image
            {preimage && (
              <img
                src={preimage}
                style={{ height: "100px", width: "100px" }}
                className="form-control border-2 border-dark"
                alt="Preview"
              />
            )}
            <input
              type="file"
              class="form-control border-2 border-dark"
              style={{ width: "300px" }}
              onChange={(e) => {
                setImage(e.target.files[0]);
                setPreimage(URL.createObjectURL(e.target.files[0]));
              }}
            ></input>
            description
            <textarea
              value={description}
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
          <table class="ml-4 mt-5 ">
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
            </tr>
            {data.map((items, index) => (
              <tr>
                <td>{items.product}</td>
                <td>{items.category}</td>
                <td>{items.price}</td>
                <td>{items.description}</td>
                {/* <td>{items.image}</td> */}
                <td>
                  <img
                    style={{ height: "70px", width: "100px" }}
                    // src={`http://localhost:2000/productImages/${items.image}`}
                    src={Img + items.image}
                  ></img>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default EditProduct;
