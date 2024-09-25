function Map() {
    const arr =[1,2,3,4,5,6,7,8,9,10]
  return <>
  {arr.map((items,index)=>{
    return(
       <li>{items}</li> 
    )
  })}

  <h3>Even Numbers</h3>
  {arr.filter((item)=>item%2==0).map((items,index)=>{
    return(
       <li>{items}</li> 
    )
  })}

 <h3>Odd Numbers</h3>
 {arr.filter((item)=>item%2!=0).map((items)=>{
    return(
        <li>{items}</li>
    )
 })}
  </>;
}

export default Map;
