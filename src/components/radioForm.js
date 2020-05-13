import React from "react"
import "../styles/radioForm.css"

function RadioForm(props){
    return(
            <div className="col-sm-3 query-container">
            <div className="col-sm-12">
                <form action="">
                    <div className="radio-container">
                        <input id="descRadio" type="radio" name="sort" value={props.sort} onChange={props.handleSort}/><label>Sort by Descending Salary</label>
                        <br/>
                        <input id="ascRadio" type="radio" name="sort" value="false" onChange={props.handleSort}/><label>Sort by Ascending Salary</label>
                    </div>
                </form>
            </div>
            </div>
    )
}

export default RadioForm