import React, { Component } from "react";

import "../styles/body.css"

const styles = {
    bigPad:{
      minHeight: 42
    },
    littlePad: {
        minHeight: 26
    },
    centerText:{
        textAlign: "center"
    }
  }

class Body extends Component {
    state = {
        search: "",
        results: []
    }

    render(){
        return (
            <div>
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
                            <div className="col-sm-3 query-container">
                                <div className="col-sm-12" style={styles.littlePad}>
                                </div>
                                <div className="col-sm-12" style={styles.centerText}>
                                <button className="search-btn">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body