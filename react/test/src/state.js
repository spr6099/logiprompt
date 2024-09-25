import { useEffect, useRef, useState } from "react";

function State() {
    const style ={
        fontWeight: "bold"
    }
  const [count, setCount] = useState(0);
  const [font, setFont] = useState();
  const handleClick = () => {
    setCount(count + 3);
  };
  const Decrement = () => {
    setCount(count - 3);
  };
  const fontChange = () => {
    setFont(style)
  };
  const clear = ()=>{
    setFont( )
  }

//   useEffect(()=>{
// console.log("updating");

//   },[])

useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  },[]);

  const myRef = useRef()
  console.log(myRef.current);
  
  const refHandle =()=>{
    myRef.current.style.backgroundColor="yellow"
  }
  return (
    <>
      <h4>count: {count}</h4>
      <button onClick={handleClick}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        reset
      </button>

      <p style={ font }>
        um is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
      <button onClick={fontChange}>bold</button>
      <button onClick={clear}>clear</button>

      <h1>I have rendered {count} times!</h1>;
      <div ref={myRef} onClick={refHandle}>This is sample div</div>
    </>
  );
}

export default State;
