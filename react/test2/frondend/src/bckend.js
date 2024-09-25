import { useEffect, useState } from "react";

function Backend() {
  const [state, setState] = useState('');
  useEffect(()=>{
    fetch('http://localhost:4000/').then((res)=>res.json()).then((result)=>{
        console.log(result);
        setState(result)
        
    })
  },[])
  return <>{state}</>;
}

export default Backend;
