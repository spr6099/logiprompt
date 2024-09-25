import React, { useEffect } from "react";

function FisrtRes() {
  useEffect(() => {
    fetch("http://localhost:2000/index/first")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  });
  return <div>FisrtResult</div>;
}

export default FisrtRes;
