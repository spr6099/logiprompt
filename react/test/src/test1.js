function Tests(props) {

const handleClick=()=>{
    alert("clicked")
    console.log("asdg");
    
}


const handleSubmit=(e)=>{

    e.preventDefault()
    console.log("hello submit");
    
}

const handleChange=(e)=>{
    console.log(e.target.value);
    
}

const arr =[1,2,3,4,5]

  return<> <h2 onClick={handleClick}>{props.name} ,{props.school}</h2>;


<form onSubmit={handleSubmit}>
<input type="text" onChange={handleChange}></input>
    <button type="submit">Submit</button>
</form>

{arr.map((items,index)=>{
    return(
        <li>{items.name}</li>
    )
})}
</>

}
export default Tests;

// import { Component } from "react";


// class Tests extends Component{
//     render(){
//         return(
//             <>
//             <h3>class component</h3>
//             </>
//         )
//     }
    
// }

//  export default Tests;
