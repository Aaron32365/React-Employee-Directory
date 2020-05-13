import React, { useContext } from "react";
import ResultContext from "../utils/ResultContext"
import "../styles/results.css"

function ResultContainer(){
    const results = useContext(ResultContext)
    console.log(results)
    const resultItems = results.map((resultItem) => 
        
            <tr className=" row">
                <td className="col-sm-3">
                    {resultItem.firstName}
                </td> 
                <td className="col-sm-3">
                    {resultItem.lastName}
                </td> 
                <td className="col-sm-3">
                    {resultItem.position}
                </td> 
                <td className="col-sm-3">
                    {resultItem.Salary}
                </td>   
            </tr>
        
        
    )
    return (
        <div className="col-sm-12">
            <div className="col-sm-12" id="header">
                Employee Directory
            </div>
            
            <table className="list-group search-results">
                <tr className="row">
                    <th className="col-sm-3">First Name</th>
                    <th className="col-sm-3">Last Name</th>
                    <th className="col-sm-3">Position</th>
                    <th className="col-sm-3">Salary</th>
                </tr>
                    {resultItems}
                </table>
        </div>
    )
}

export default ResultContainer