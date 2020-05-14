import React, { useContext } from "react"
import "../styles/radioForm.css"
import ResultContext from "../utils/ResultContext"

function RadioForm(){
    const context = useContext(ResultContext)
    return(
            <div className="col-sm-3 query-container">
            <div className="col-sm-12">
                <form action="">
                    <div className="radio-container">
                        <input id="descRadio" type="radio" name="sort" onChange={context.sort}/><label>Sort by Descending Salary</label>
                        <br/>
                        <input id="ascRadio" type="radio" name="sort" onChange={context.filter}/><label>Filter: Management only</label>
                    </div>
                </form>
            </div>
            </div>
    )
}

export default RadioForm