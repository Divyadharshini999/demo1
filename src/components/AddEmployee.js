import React from "react";

function AddEmployee()
{
    return(
        <div className="addinput">
           <input type="text" placeholder="Enter your name"></input>
           <br></br>
           <input type="text" placeholder="enter the discription"></input>
           <br></br>
           <input type="text" placeholder="enter the date of joining"></input>
           <br></br>
           <button>SUBMIT</button>
        </div>
        
    )
}
export default AddEmployee