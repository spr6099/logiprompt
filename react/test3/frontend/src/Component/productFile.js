import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Link } from "react-router-dom";
import Img from "./imgURL";

function ProductFile() {
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch("http://localhost:2000/indexFile/getProductFile")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       // console.log("Getproduct", result);
  //       setData(result);
  //     });
  // }, []);

  const FormSubmit = (e) => {
    e.preventDefault();
    // let datas = {
    //   product: product,
    //   category: category,
    //   price: price,
    //   description: description,
    //   image: image,
    // };
    let datas = new FormData();
    datas.append("product", product);
    datas.append("category", category);
    datas.append("price", price);
    datas.append("description", description);
    datas.append("image", image);


    fetch("http://localhost:2000/indexFile/productFile", {
      method: "post",
      // headers: {
      //   Accept: "application/json",
      //   "Content-Type": "application/json",
      // },
      body: datas,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("product.js", result);
        // navigate("/");
        window.location.reload();
      });
  };

  const Delete = (id) => {
    let deleteId = {
      Delid: id,
    };
    // console.log("12345",deleteId);
    fetch("http://localhost:2000/indexFile/productDelete", {
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
            // encType="multipart/form-data"
            class="container border border-2 border-dark mt-5"
            style={{ width: "500px", backgroundColor: "#6c784c" }}
          >
            <h3>ProductFile</h3>
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
            Image
            <input
              type="file"
              class="form-control border-2 border-dark"
              style={{ width: "300px" }}
              // onChange={(e) => {
              //   setImage(e.target.value.replace("C:\\fakepath\\", ""));
              // }}
              onChange={(e) => {
                setImage(e.target.files[0]);
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
        <div class="col-7 mt-5">
          <table>
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

export default ProductFile;
