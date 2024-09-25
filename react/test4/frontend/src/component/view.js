import { useEffect, useState } from "react";

function View() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/first/view")
      .then((res) => res.json())
      .then((result) => {
        console.log(result,'niji');
        setData(result);
      });
  }, []);
//   console.log("123", data);

  return (
    <div class="container">
      <table class="table">
        <tr>
          <th>UserName</th>
          <th>address</th>
          <th>email</th>
          <th>password</th>
        </tr>
        {data.map((items, index) => (
          <tr>
            <td>{items.regId.name}</td>
            <td>{items.regId.address}</td>
            <td>{items.email}</td>
            <td>{items.password}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default View;
