import { useEffect, useRef, useState } from "react";

// function Ref() {
//   const myRef = useRef(0);
//   const [count,setCount]= useState(0)

//   const increment = () => {
//     myRef.current = myRef.current + 3;
//     setCount(myRef.current)

//     console.log(myRef.current);
//   };
//   const decrement = () => {
//     myRef.current = myRef.current - 3;
//     setCount(myRef.current)

//     console.log(myRef.current);
//   };
// //   useEffect(() => {
// //     console.log("useEffect", myRef.current);
// //   });

//   return (
//     <>
//       <h4 >count:</h4>
//       {/* <h4>{count}</h4> */}
//       <h4>{count}</h4>
//       {console.log("myRef", myRef.current)}

//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//     </>
//   );
// }

function Ref() {
  const myRef = useRef(0);
  const [count, setCount] = useState(0);

  const [view, setView] = useState("");

  const increment = () => {
    myRef.current = myRef.current + 3;
    setCount(myRef.current);

    console.log(myRef.current);
  };

  const decrement = () => {
    myRef.current = myRef.current - 3;
    setCount(myRef.current);
    console.log(myRef.current);
  };

  //   useEffect(() => {
  //     console.log("useEffect", myRef.current);
  //   });

 
  return (
    <>
      <h4>count:</h4>
      {/* <h4>{count}</h4> */}
      <h4>{myRef.current}</h4>
      {console.log("myReff", myRef.current)}

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <p>{view}</p>
    </>
  );
}

export default Ref;
