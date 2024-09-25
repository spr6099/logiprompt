import { useEffect, useState } from "react";
import Img from "./imgURL";
function File() {
  const [files, setFiles] = useState([]);
  const [data, setData] = useState([]);

  console.log("fil", files);
  console.log("data", data);

  useEffect(() => {
    fetch("http://localhost:4000/first/getfiles")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }, []);

  const FileSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();

    files.forEach((file) => {
      formData.append("files", file);
    });
    console.log(formData);

    fetch("http://localhost:4000/first/files", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result.filepaths);
      });
  };

  return (
    <>
      <form onSubmit={FileSubmit} encType="multipart/form-data">
        <input
          type="file"
          multiple
          onChange={(e) => {
            setFiles(Array.from(e.target.files));
          }}
        ></input>
        <button type="submit">submit</button>
      </form>
      {/* <table>
        <tr>
          <th>images</th>{" "}
        </tr>

        {data.map((items) => {
          <tr>
            <td>
              {" "}
              <img
                style={{ height: "150px", width: "150px" }}
                src={`http://localhost:4000/uploads/${items.filepaths}`}
              ></img>
            </td>{" "}
          </tr>;
        })}
      </table> */}
      <table>
        <thead>
          <tr>
            <th>Images</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {data.map((item, index) => (
              <td>
                <img
                  style={{ height: "150px", width: "150px" }}
                  src={`http://localhost:4000${item}`}
                  alt={`uploaded-${index}`}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default File;
