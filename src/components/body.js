import React, { useState, useEffect, useContext } from "react";
import "../styles/body.css"
import RadioForm from "./radioForm";
// import db from "../db.json"
import ResultContainer from "./results.js"
import ResultContext from "../utils/ResultContext"
import db from "../db.json";

const styles = {
    bigPad:{
      minHeight: 80 
    },
    littlePad: {
        minHeight: 26
    },
    centerText:{
        textAlign: "center"
    },
    test: {
        backgroundColor: "red",
        height: 400
    }
  }

    function Body(){
        const [resultListState, setResultListState] = useState(db)
        const [resultState, setResultState] = useState({})

    return (
        <ResultContext.Provider value={resultListState}>
            <div className="col-sm-12">
            </div>
            <div className="row">
                <div className="col-sm-2">
                </div>
                <div className="col-sm-8 body-container">
                    <div className="row">
                        <div className="col-sm-12" style={styles.bigPad}>

                        </div>
                        <div className="col-sm-1">

                        </div>
                        <RadioForm
                        />
                        <div className="col-sm-1">

                        </div>
                        <div className="col-sm-6 employee-card">
                                <ResultContainer/>
                        </div>
                    </div>
                </div>
            </div>
        </ResultContext.Provider>
    )
}

export default Body