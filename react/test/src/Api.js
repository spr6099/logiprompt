import { useEffect, useState } from "react";
import axios from "axios";

// function Api() {
//   const [view, setView] = useState([]);
//   const [searchItem, setSearchItem] = useState("");
//   const [filteredUsers, setFilteredUsers] = useState([]);

//   const fetchData = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((result) => {
//         console.log(result);
//         // setView(JSON.stringify(result));
//         setView(result);
//         setFilteredUsers(result);
//       });
//   };

//   const Search = (e) => {
//     const searchText = e.target.value;
//     setSearchItem(searchText);
//     const filteredItems = view.filter((user) =>
//       user.title.toLowerCase().includes(searchText.toLowerCase())
//     );
//     setFilteredUsers(filteredItems);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   console.log("searchItem", searchItem);

//   return (
//     <>
//       <table class="table table-dark p-2 m-2">
//         <thead class="">
//           <tr>
//             <td></td>
//             <td></td>
//             <td>
//               <a>
//                 <input
//                   type="text"
//                   value={searchItem}
//                   class="form-control"
//                   style={{ width: "200px" }}
//                   onChange={Search}
//                 />
//               </a>
//             </td>
//           </tr>
//           <tr>
//             <th>Id</th>
//             <th>title</th>
//             <th>body</th>
//           </tr>
//         </thead>

//         {/* {view.map((items, index) => {
//           return (
//             <tr>
//               <td>{items.id}</td>
//               <td>{items.title}</td>
//               <td>{items.body}</td>
//             </tr>
//           );
//         })} */}

//         {filteredUsers.map((items, index) => {
//           return (
//             <tr>
//               <td>{items.id}</td>
//               <td>{items.title}</td>
//               <td>{items.body}</td>
//             </tr>
//           );
//         })}
//       </table>
//     </>
//   );
// }

function Api() {
  const [view, setView] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  // const [axiosapi, setApi] = useState("");

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        // setView(JSON.stringify(result));
        setView(result);
        // setFilteredUsers(result);
      });
  };

  const Search = (e) => {
    const searchText = e.target.value;
    setSearchItem(searchText);
    const filteredItems = view.filter((user) =>
      user.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  };
  // console.log("Search",searchItem);

  useEffect(() => {
    fetchData();
  }, []);

  // console.log("searchItem", searchItem);
  // useEffect(()=>{
  //   axios.get('https://jsonplaceholder.typicode.com/posts').then((result)=>{
  //     console.log(result.data,"res");
  //     setApi(JSON.stringify(result.data))

  //   })
  // })
  return (
    <>
      {/* <p>{axiosapi}</p> */}
      <table class="table table-dark p-2 m-2">
        <thead class="">
          <tr>
            <td></td>
            <td></td>
            <td>
              <a>
                <input
                  type="text"
                  value={searchItem}
                  class="form-control"
                  style={{ width: "200px" }}
                  onChange={Search}
                />
              </a>
            </td>
          </tr>
          <tr>
            <th>Id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>

        {/* {view.map((items, index) => {
          return (
            <tr>
              <td>{items.id}</td>
              <td>{items.title}</td>
              <td>{items.body}</td>
            </tr>
          );
        })} */}

        {filteredUsers.map((items, index) => {
          return (
            <tr>
              <td>{items.id}</td>
              <td>{items.title}</td>
              <td>{items.body}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default Api;
