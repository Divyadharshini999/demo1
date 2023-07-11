import React from "react";

function Employee(){
    return(
        // <div className="employee">employee</div>

        <div className="emp">
        <table className="tabemp">
            <tr>
                <th>NAME</th>
                <th>DISCRIPTION</th>
                <th>DATE OF JOINING</th>
            </tr>
            <tr>
                <td>Divya</td>
                <td>Developer</td>
                <td>22.05.2023</td>
            </tr>
            <tr>
                <td>srii</td>
                <td>System Engineer</td>
                <td>10.01.2021</td>
            </tr>
            <tr>
                <td>Nandhu</td>
                <td>Developer</td>
                <td>12.05.2020</td>
            </tr>
        </table>
       
        </div>
    )
}
export default Employee