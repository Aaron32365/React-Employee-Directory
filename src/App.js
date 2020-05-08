import React from 'react';
import Header from "./components/head"
import Body from "./components/body.js" 

const styles = {
  pad:{
    minHeight: 70
  }
}

function App() {
  return (
    <div>
      <Header />
      <div className="col-sm-12" style = {styles.pad}>
      </div>
      <Body />
    </div>
  );
}

export default App;
